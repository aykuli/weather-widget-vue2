<template>
  <div class="containerApp">
    <el-card shadow="always" class="box-card">
      <div slot="header" class="clearfix header">
        <p class="title" v-if="weatherData">{{ weatherData.city || '' }}</p>
        <el-button type="primary" circle @click="openConfig">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
            </g>
          </svg>
        </el-button>
      </div>
      <description :weatherData="weatherData" />
    </el-card>
    <el-dialog title="Settings" :visible.sync="isShowForm" width="30%" :before-close="closeForm" close-on-press-escape>
      <form-modal :isShow="isShowForm" :closeForm="closeForm" :locations.sync="locations"></form-modal>
    </el-dialog>
    <el-dialog
      title="Error"
      :visible.sync="isShowErrModal"
      width="30%"
      :before-close="closeErrModal"
      close-on-press-escape
    >
      <error-modal :closeErrModal="closeErrModal" :errMsg="errMsg"></error-modal>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.containerApp {
  max-width: 350px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & button {
    padding: 5px;
  }
}
.title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { WeatherData, WidgetGeoLocation } from './types'
import { ERR_MSG_CITY_WRONG, WEATHER_WIDGET_DATA_HISTORY, MSG_FETCH_CURR_PLACE, ERR_MSG_CURR_PLACE } from './constantas'
import FormModal from './components/Form.vue'
import ErrorModal from './components/ErrorModal.vue'
import WeatherIcon from './components/WeatherIcon.vue'
import Description from './components/Description.vue'

@Component({
  components: {
    FormModal,
    WeatherIcon,
    Description,
    ErrorModal,
  },
})
export default class App extends Vue {
  isLoading = false
  weatherData: null | WeatherData = null
  location: WidgetGeoLocation | null = null
  locations: WidgetGeoLocation[] = []
  isShowForm = false
  isShowErrModal = false
  errMsg = ''
  icon: any = null

  async mounted(): Promise<void> {
    const isGetCurrPlace = !this.isConfigFromLocalStorageExists()
    if (isGetCurrPlace) {
      await this.getCurrentPlace()
    } else {
      this.getWeatherData()
    }
  }

  isConfigFromLocalStorageExists(): boolean {
    const locations = this.checkHistoryFromLS()
    if (locations) {
      this.locations = locations as WidgetGeoLocation[]
      const len = (locations as WidgetGeoLocation[]).length
      const location = (locations as WidgetGeoLocation[])[len - 1]
      const { city, latitude, longitude, country }: WidgetGeoLocation = location
      this.location = { city: city || 'Moscow', latitude, longitude, country }
      console.log(this.location)
      return true
    }
    return false
  }

  checkHistoryFromLS(): boolean | WidgetGeoLocation[] {
    const locationsStr = localStorage.getItem(WEATHER_WIDGET_DATA_HISTORY)
    if (locationsStr) {
      const locations = JSON.parse(locationsStr)
      const isValid = typeof locations === 'object' && locations.length
      if (!isValid) {
        localStorage.removeItem(WEATHER_WIDGET_DATA_HISTORY)
        this.locations = []
        return false
      }
      return locations
    }
    return false
  }

  async getCurrentPlace(): Promise<void> {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.location = { latitude, longitude }
        this.getWeatherData()
      },
      (error) => {
        console.error('error happened: ', error)
        this.isShowErrModal = true
        this.errMsg = ERR_MSG_CURR_PLACE
        setTimeout(() => {
          this.closeErrModal()
        }, 3000)
      },
      { enableHighAccuracy: true, timeout: 60000 }
    )
  }

  private getWeatherData(): void {
    if (this.location?.city) {
      const stateCode = this.location?.state ? `,${this.location.state}` : ''
      const country = this.location?.country ? `,${this.location.country}` : ''
      const query = this.location.city + stateCode + country
      this.fetchWeatherData(`q=${query}`)
    } else if (this.location?.latitude && this.location?.longitude) {
      this.fetchWeatherData(`lat=${this.location.latitude}&lon=${this.location.longitude}`)
    }
  }

  private async fetchWeatherData(q: string, option?: { isFromForm: boolean; newLocation: WidgetGeoLocation }) {
    // const data = mock
    // const { temp, feels_like, humidity, pressure } = data.main
    // const { speed } = data.wind

    // this.weatherData = {
    //   city: data.name || '',
    //   temperature: temp,
    //   feelsLike: feels_like,
    //   humidity,
    //   windSpeed: speed,
    //   pressure,
    //   icon: data.weather?.length ? data.weather[0].icon : undefined,
    // }
    // console.log('this.weatherData: ', this.weatherData)

    try {
      this.isLoading = true
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?${q}&appid=${process.env.VUE_APP_API_KEY}&units=metric`,
        {
          method: 'GET',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'json',
            'X-Requested-With': 'WebView',
          },
          referrerPolicy: 'no-referrer',
        }
      )
      const data = await res.json()
      console.log(res.status)
      if (res.status !== 200) {
        this.handleError(data.message)
      } else {
        this.weatherData = {
          city: data.name || '',
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          pressure: 12,
          icon: data.weather?.length ? data.weather[0].icon : undefined,
        }
        if (option && option.isFromForm) {
          this.addCityToLS(option.newLocation)
        }
      }
    } catch (e) {
      console.error(e)
    } finally {
      this.isLoading = false
    }
  }

  handleError(msg?: string): void {
    this.isShowErrModal = true
    setTimeout(() => {
      this.closeErrModal()
    }, 3000)
    if (msg === ERR_MSG_CITY_WRONG) {
      this.errMsg = `${msg}.\n${MSG_FETCH_CURR_PLACE}`
      this.deleteLastRowFromHistory()
      this.getCurrentPlace()
      return
    }
    this.errMsg = msg || `Something went wrong.\nMaybe city "${this.location?.city} doesn't exists."`
  }

  closeErrModal(): void {
    this.isShowErrModal = false
    this.errMsg = ''
  }

  openConfig(): void {
    this.isShowForm = true
  }
  closeForm(newLocation?: WidgetGeoLocation): void {
    this.isShowForm = false
    if (newLocation) {
      console.log('newLocation: ', newLocation)
      const { city, country } = newLocation
      this.fetchWeatherData(`q=${city}${country ? `,${country}` : ''}`, { isFromForm: true, newLocation })
    }
  }

  deleteLastRowFromHistory(): void {
    const locations = this.checkHistoryFromLS()
    if (locations) {
      this.locations = (locations as WidgetGeoLocation[]).slice(0, -1)
      localStorage.setItem(WEATHER_WIDGET_DATA_HISTORY, JSON.stringify(this.locations))
    }
  }

  addCityToLS(newLocation: WidgetGeoLocation): void {
    this.locations = [...this.locations, newLocation]
    localStorage.setItem(WEATHER_WIDGET_DATA_HISTORY, JSON.stringify(this.locations))
  }
}
</script>
