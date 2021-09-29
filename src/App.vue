<template>
  <div class="container">
    <el-card shadow="always" class="box-card">
      <div slot="header" class="clearfix header">
        <p class="title" v-if="weatherData">{{ weatherData.city || '' }}</p>
        <el-button type="primary" circle icon="el-icon-s-tools" @click="openConfig"></el-button>
      </div>
      <description :weatherData="weatherData" />
    </el-card>
    <el-dialog title="Settings" :visible.sync="isShowForm" width="30%" :before-close="closeForm" close-on-press-escape>
      <form-modal :isShow="isShowForm" :closeForm="closeForm"></form-modal>
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
.container {
  min-width: 100px;
  max-width: 500px;
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
import { ERR_MSG_CITY_WR, WEATHER_WIDGET_DATA_HISTORY, MSG_FETCH_CURR_PLACE, ERR_MSG_CURR_PLACE } from './constantas'
import FormModal from './components/Form.vue'
import ErrorModal from './components/ErrorModal.vue'
import WeatherIcon from './components/WeatherIcon.vue'
import Description from './components/Description.vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mock = require('./mock.json')

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
    const locationsStr = localStorage.getItem(WEATHER_WIDGET_DATA_HISTORY)
    if (locationsStr) {
      try {
        const locations = JSON.parse(locationsStr)
        const location = locations[locations.length - 1]
        const { city, latitude, longitude, country }: WidgetGeoLocation = location
        this.location = {
          city: city || 'Moscow',
          latitude,
          longitude,
          country,
        }
        console.log(this.location)
        return true
      } catch (e) {
        return false
      }
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

  private async fetchWeatherData(q: string) {
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
      }
    } catch (e) {
      console.error(e)
    } finally {
      this.isLoading = false
    }
  }

  handleError(msg?: string): void {
    console.log('handleError')
    console.log('msg: ', msg)
    this.isShowErrModal = true
    setTimeout(() => {
      this.closeErrModal()
    }, 3000)
    if (msg === ERR_MSG_CITY_WR) {
      this.errMsg = `${msg}.\n${MSG_FETCH_CURR_PLACE}`
      console.log('this.errMsg: ', this.errMsg)
      this.getCurrentPlace()

      return
    }
    // this.isShowErrModal = true
    this.errMsg = msg || `Something went wrong.\nMaybe city "${this.location?.city} doesn't exists."`
  }

  closeErrModal(): void {
    this.isShowErrModal = false
    this.errMsg = ''
  }

  openConfig(): void {
    this.isShowForm = true
  }
  closeForm(option?: 'get-data'): void {
    this.isShowForm = false
    if (option === 'get-data') {
      console.log('this.location: ', this.location)
      console.log('todo get data')
      const locations = JSON.parse(localStorage.getItem(WEATHER_WIDGET_DATA_HISTORY) || '')
      const location = locations[locations.length - 1]
      const { city, country } = location
      console.log('location: ', location)
      this.fetchWeatherData(`q=${city}${country ? `,${country}` : ''}`)
    }
  }

  getNewWeatherData(): void {
    console.log('getNewWeatherData')
  }
}
</script>
