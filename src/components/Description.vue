<template>
  <div>
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
      font-size: 4rem;
    }
  }
}
.value {
  font-size: 1rem;
  font-weight: 600;
}
</style>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class Description extends Vue {
  @Prop(String)
  public weatherData!: string
}
</script>
