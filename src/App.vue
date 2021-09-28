<template>
  <div class="container">
    <el-card shadow="always" class="box-card">
      <div slot="header" class="clearfix header">
        <p class="title" v-if="weatherData">{{ weatherData.city || '' }}</p>
        <el-button type="primary" circle icon="el-icon-s-tools" @click="openConfig"></el-button>
      </div>
      <div v-if="weatherData" class="weather__wrap">
        <div class="weather__current">
          <weather-icon :iconName="weatherData.icon || ''" class="weather__icon" />
          <div>
            <span>{{ Math.round(weatherData.temperature, 0) || '' }}</span>
            <span class="weather__current--sign">°</span>
          </div>
        </div>
        <el-descriptions class="margin-top" :column="1" size="default" border>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              Feels like
            </template>
            <span class="value">
              {{ weatherData.feelsLike }}
            </span>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-s-unfold"></i>
              Wind
            </template>
            <span class="value">
              {{ weatherData.windSpeed }}
            </span>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-magic-stick"></i>
              Humidity
            </template>
            <span class="value"> {{ weatherData.humidity }} % </span>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-attract"></i>
              Pressure
            </template>
            <span class="value">
              {{ weatherData.pressure }}
            </span>
          </el-descriptions-item>
        </el-descriptions>
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
    padding: 5px;
  }
}
.value {
  font-size: 1rem;
  font-weight: 600;
}
.title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}
.weather {
  &__icon {
    margin-right: 20px;
  }
  &__current {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 6rem;
    line-height: 6.2rem;
    font-weight: 700;
    &--sign {
      font-size: 4rem;
    }
    &--list {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 220px;
      margin-bottom: 30px;
      font-size: 20px;
      line-height: 22px;
    }
    &--item {
      margin-bottom: 5px;
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { WeatherData, WidgetGeoLocation } from './types'
import { WEATHER_WIDGET_DATA_HISTORY } from './constantas'
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
    const location = localStorage.getItem(WEATHER_WIDGET_DATA_HISTORY)
    if (location) {
      try {
        const { city, latitude, longitude, countryCode }: WidgetGeoLocation = JSON.parse(location)
        this.location = {
          city: city || 'Moscow',
          latitude,
          longitude,
          countryCode,
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
        this.getQuery()
      },
      (error) => {
        console.error('error happened: ', error)
      },
      { enableHighAccuracy: true, timeout: 60000 }
    )
  }

  private getQuery(): void {
    if (this.location?.city) {
      const stateCode = this.location?.stateCode ? `,${this.location.stateCode}` : ''
      const countryCode = this.location?.countryCode ? `,${this.location.countryCode}` : ''
      const query = this.location.city + stateCode + countryCode
      this.getWeatherData(`q=${query}`)
    } else if (this.location?.latitude && this.location?.longitude) {
      this.getWeatherData(`lat=${this.location.latitude}&lon=${this.location.longitude}`)
    }
  }

  private async getWeatherData(q: string) {
    const data = mock
    const { temp, feels_like, humidity, pressure } = data.main
    const { speed } = data.wind

    this.weatherData = {
      city: data.name || '',
      temperature: temp,
      feelsLike: feels_like,
      humidity,
      windSpeed: speed,
      pressure,
      icon: data.weather?.length ? data.weather[0].icon : undefined,
    }
    console.log('this.weatherData: ', this.weatherData)

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
