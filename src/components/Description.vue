<template>
  <div v-if="weatherData">
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
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
            </g>
          </svg>
          Feels like
        </template>
        <span class="value"> {{ Math.round(weatherData.feelsLike, 0) || '' }}° </span>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 8h8.5a2.5 2.5 0 1 0-2.34-3.24"></path>
              <path d="M3 12h15.5a2.5 2.5 0 1 1-2.34 3.24"></path>
              <path d="M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24"></path>
            </g>
          </svg>
          Wind
        </template>
        <span class="value">
          {{ weatherData.windSpeed }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <path
              d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.043A9.986 9.986 0 0 0 7 19a9 9 0 0 0 18 0a10.063 10.063 0 0 0-1.524-5.007zM16 26a7.009 7.009 0 0 1-7-7a7.978 7.978 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.977 6.977 0 0 1 16 26.001z"
              fill="currentColor"
            ></path>
          </svg>
          Humidity
        </template>
        <span class="value"> {{ weatherData.humidity }} % </span>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1zm10.79-6H13V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9.21a.5.5 0 0 0-.36.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.32-.31.1-.85-.35-.85zM9.21 19H11v2c0 .55.45 1 1 1s1-.45 1-1v-2h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85zM5 14h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"
              fill="currentColor"
            ></path>
          </svg>
          Pressure
        </template>
        <span class="value">
          {{ weatherData.pressure }}
        </span>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped lang="scss">
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
      font-size: 5rem;
      line-height: 6.2rem;
      vertical-align: text-top;
    }
  }
}
.value {
  font-size: 1rem;
  font-weight: 600;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
const DescriptionProps = Vue.extend({
  props: {
    weatherData: Object,
  },
})

@Component
export default class Description extends DescriptionProps {}
</script>
