<template>
  <div class="container">
    <el-card shadow="always" class="box-card">
      <div slot="header" class="clearfix header">
        <p class="title" v-if="weatherData">{{ weatherData.city || '' }}</p>
        <el-button @click="openConfig" type="primary" plain size="small">
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
            </g></svg
        ></el-button>
      </div>
      <div v-if="weatherData" class="weather__wrap">
        <div class="weather__current--wrap">
          <div class="weather__current">
            <weather-icon :iconName="weatherData.icon || ''" />

            <div>
              <span>{{ Math.round(weatherData.temperature, 0) || '' }}</span>
              <span class="weather__current--sign">°</span>
            </div>
          </div>
          <div class="weather__current--list">
            <p class="weather__current--item">
              <span>Feels like: </span><span>{{ weatherData.feels_like }}</span
              ><span>°</span>
            </p>
            <p class="weather__current--item">
              <span>Wind: </span><span>{{ weatherData.windSpeed }}</span
              ><span> m/s</span>
            </p>
            <p class="weather__current--item">
              <span>Humidity: </span><span>{{ weatherData.humidity }}%</span>
            </p>
          </div>
        </div>
      </div>
    </el-card>
    <form-modal :isShow="isShow" :closeConfig="closeConfig"></form-modal>
  </div>
</template>

<style scoped lang="scss">
.container {
  min-width: 100px;
  max-width: 500px;
  min-height: 100px;
  max-height: 500px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & button {
    display: flex;
    justify-content: center;
    width: 20px;
    padding: 3px 13px 2px;
    text-align: center;
    border-radius: 50%;
  }
}
.title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}
.weather__current--wrap {
  margin-bottom: 30px;
}
.weather__current {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 380px;
  font-size: 200px;
  line-height: 250px;
  font-weight: 700;
}
.weather__current--list {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 220px;
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 22px;
}
.weather__current--item {
  margin-bottom: 5px;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { WeatherData, WidgetGeoLocation, WidgetConfig } from './types'
import { WEATHER_WIDGET_DATA } from './constantas'
import FormModal from './components/Form.vue'
import WeatherIcon from './components/WeatherIcon.vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mock = require('./mock.json')

@Component({
  components: {
    FormModal,
    WeatherIcon,
  },
})
export default class App extends Vue {
  isLoading = false
  weatherData: null | WeatherData = null
  location: WidgetGeoLocation | null = null
  isShow = false
  icon: any = null

  async mounted(): Promise<void> {
    const isGetCurrPlace = !this.isConfigFromLocalStorageExists()
    if (isGetCurrPlace) {
      await this.getCurrentPlace()
    }
  }

  isConfigFromLocalStorageExists(): boolean {
    const location = localStorage.getItem(WEATHER_WIDGET_DATA)
    if (location) {
      try {
        const { city, latitude, longitude }: WidgetConfig = JSON.parse(location)
        this.location = {
          city: city || 'Moscow',
          latitude,
          longitude,
        }
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
        console.log('0', latitude, longitude)
        this.location = { latitude, longitude }
        console.log('this.location: ', this.location)
        this.getQuery()
      },
      (error) => {
        console.error('error happened: ', error)
      },
      { enableHighAccuracy: true, timeout: 60000 }
    )
  }

  private getQuery(): void {
    console.log('this.location: ', this.location)
    if (this.location?.city) {
      const stateCode = this.location?.stateCode ? `,${this.location.stateCode}` : ''
      const countryCode = this.location?.countryCode ? `,${this.location.countryCode}` : ''
      const query = this.location.city + stateCode + countryCode
      this.getWeatherData(`q=${query}`)
    } else if (this.location?.latitude && this.location.longitude) {
      this.getWeatherData(`lat=${this.location.latitude}&lon=${this.location.longitude}`)
    }
  }

  private async getWeatherData(q: string) {
    const data = mock

    this.weatherData = {
      city: data.name || '',
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: 12,
      icon: data.weather?.length ? data.weather[0].icon : undefined,
    }

    // try {
    //   this.isLoading = true

    //   const res = await fetch(
    //     `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?${q}&appid=${process.env.VUE_APP_API_KEY}&units=metric`,
    //     {
    //       method: 'GET',
    //       mode: 'cors',
    //       credentials: 'same-origin',
    //       headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Credentials': 'true',
    //         'Access-Control-Allow-Headers': '*',
    //         'Content-Type': 'json',
    //         'X-Requested-With': 'WebView',
    //       },
    //       referrerPolicy: 'no-referrer',
    //     }
    //   )
    //   console.log('res: ', res)
    //   const data = await res.json()
    //   this.weatherData = {
    //     city: data.name || '',
    //     temperature: data.main.temp,
    //     feelsLike: data.main.feels_like,
    //     humidity: data.main.humidity,
    //     windSpeed: data.wind.speed,
    //     pressure: 12,
    //     icon: data.weather?.length ? data.weather[0].icon : undefined,
    //   }
    // } catch (e) {
    //   console.error(e)
    // } finally {
    //   this.isLoading = false
    // }
  }

  openConfig(): void {
    this.isShow = true
  }
  closeConfig(): void {
    this.isShow = false
  }
}
</script>
