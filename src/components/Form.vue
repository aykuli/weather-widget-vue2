<template>
  <div class="container">
    <p class="history__title">History</p>
    <draggable :list="locations" class="history__list">
      <div v-for="(place, index) in locations" :key="index">
        <history-item :deleteItem="() => deletePlace(index)" :place="place"></history-item>
      </div>
    </draggable>
    <form @submit="saveLocation">
      <el-descriptions title="Type new city to search" direction="vertical" :column="2" border>
        <el-descriptions-item label="City">
          <label class="label" for="city">
            <el-input
              id="city"
              name="city"
              v-model="city"
              type="text"
              placeholder="city to search"
              @input="(value) => inputHandler('city', value)"
            />
          </label>
        </el-descriptions-item>
        <el-descriptions-item label="Country *optional">
          <label class="label" for="country">
            <el-input
              id="country"
              name="country"
              v-model="country"
              type="text"
              placeholder="country code"
              @input="(value) => inputHandler('country', value)"
            />
          </label>
        </el-descriptions-item>
      </el-descriptions>
      <div class="footer">
        <el-button @click="closeForm">Cancel</el-button>
        <el-button type="primary" @click="saveLocation" icon="el-icon-sunrise">Submit</el-button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.container {
  & p,
  span {
    color: #303133;
  }
}
.label {
  display: flex;
  align-items: flex-start;
}
.footer {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.history {
  &__list {
    margin-bottom: 20px;
  }
  &__title {
    margin-top: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>

<script lang="ts">
import Draggable from 'vuedraggable'
import { Vue, Component } from 'vue-property-decorator'
import { WEATHER_WIDGET_DATA_HISTORY } from '../constantas'
import HistoryItem from './HistoryItem.vue'
import { WidgetGeoLocation } from '@/types'

@Component({
  components: {
    HistoryItem,
    Draggable,
  },
  props: {
    isShow: Boolean,
    locations: Object,
    closeForm: Function,
  },
})
export default class Form extends Vue {
  isShow!: string
  closeForm!: (newLocation?: WidgetGeoLocation) => void
  locations!: WidgetGeoLocation[]

  // history: WidgetGeoLocation[] = []
  city = ''
  country = ''

  // mounted(): void {
  //   this.isConfigFromLocalStorageExists()
  // }

  // isConfigFromLocalStorageExists(): boolean {
  //   const history = localStorage.getItem(WEATHER_WIDGET_DATA_HISTORY)
  //   if (history) {
  //     try {
  //       this.history = JSON.parse(history)
  //       return true
  //     } catch (e) {
  //       return false
  //     }
  //   }
  //   return false
  // }

  inputHandler(type: 'city' | 'country', value: string): void {
    switch (type) {
      case 'city':
        this.city = value
        break
      case 'country':
        this.country = value
        break
      default:
        break
    }
  }

  saveLocation(): void {
    const locationToSave = this.city ? { city: this.city, country: this.country } : undefined
    this.closeForm(locationToSave)
    this.city = ''
    this.country = ''
  }
  deletePlace(index: number): void {
    const newHistory = [...this.locations.slice(0, index), ...this.locations.slice(index + 1)]
    localStorage.setItem(WEATHER_WIDGET_DATA_HISTORY, JSON.stringify(newHistory))
    this.locations = newHistory
  }
}
</script>
