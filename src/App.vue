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
        <img :src="weatherData.icon" />
        <p>{{ weatherData.temperature || '' }}</p>
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
  font-weight: 600;
  font-size: 1.5rem;
}
</style>

<script lang="ts">
import { WeatherData, WidgetGeoLocation, WidgetConfig } from './types'
import { WEATHER_WIDGET_DATA } from './constantas'
import FormModal from './components/Form.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    FormModal,
  },
})
export default class App extends Vue {
  isLoading = false
  weatherData: null | WeatherData = null
  location: WidgetGeoLocation | null = null
  isShow = false

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
      console.log('res: ', res)
      const data = await res.json()
      const icon = data.weather?.length ? data.weather[0].icon : undefined
      if (icon) {
        this.getIcon(icon)
      }
      this.weatherData = {
        city: data.name || '',
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: 12,
      }
    } catch (e) {
      console.error(e)
    } finally {
      this.isLoading = false
    }
  }

  async getIcon(icon: string): Promise<void> {
    console.log(icon)
    try {
      const res = await fetch(` http://openweathermap.org/img/wn/${icon || '01d'}@2x.png`, {})
      const imageObjectURL = URL.createObjectURL(await res.blob())
      if (this.weatherData) {
        this.weatherData.icon = imageObjectURL
        console.log(imageObjectURL)
      }
    } catch (e) {
      console.error(e)
    }
  }

  openConfig(): void {
    this.isShow = true
  }
  closeConfig(): void {
    this.isShow = false
  }
}
</script>
