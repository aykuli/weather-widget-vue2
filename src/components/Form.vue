<template>
  <div>
    <draggable :list="history">
      <div v-for="element in history" :key="element.city">
        {{ element.city }}
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

<style scoped>
.label {
  display: flex;
  align-items: flex-start;
}
.footer {
  display: flex;
  justify-content: center;
  padding-top: 20px;
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
    closeForm: Function,
  },
})
export default class Form extends Vue {
  isShow!: string
  closeForm!: (option?: 'get-data') => void

  history: WidgetGeoLocation[] = []
  city = ''
  country = ''

  mounted(): void {
    this.isConfigFromLocalStorageExists()
    console.log('form')
  }

  isConfigFromLocalStorageExists(): boolean {
    const history = localStorage.getItem(WEATHER_WIDGET_DATA_HISTORY)
    if (history) {
      try {
        this.history = JSON.parse(history)
        return true
      } catch (e) {
        return false
      }
    }
    return false
  }

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
    this.history = [...this.history, { city: this.city, country: this.country } as WidgetGeoLocation]
    localStorage.setItem(WEATHER_WIDGET_DATA_HISTORY, JSON.stringify(this.history))
    this.city = ''
    this.country = ''
    this.closeForm('get-data')
  }
}
</script>
