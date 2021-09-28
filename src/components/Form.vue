<template>
  <div>
    <div v-if="isShow" class="bg">
      <div class="modal">
        <el-card :bordered="true" size="small" closable @close="closeConfig">
          <div slot="header" class="clearfix header">
            <p>Settings</p>
            <el-button @click="closeConfig">
              <svg
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
              >
                <path
                  d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
                  fill="currentColor"
                ></path>
              </svg>
            </el-button>
          </div>
          <draggable :list="history">
            <div v-for="element in history" :key="element">
              {{ element }}
            </div>
          </draggable>

          <label class="label">
            <el-input
              class="input"
              v-model="city"
              type="text"
              placeholder="city to search"
              @input="inputChangeHandler"
              style="width: 80%"
            />
            <el-button class="submit" @click="saveLocation">
              <svg
                width="20"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    d="M21.25 4a.75.75 0 0 1 .75.75v6.5A3.75 3.75 0 0 1 18.25 15H4.586l3.72 3.72a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073l-5-5a.75.75 0 0 1-.073-.976l.073-.084l5-5a.75.75 0 0 1 1.133.976l-.073.084l-3.72 3.72H18.25a2.25 2.25 0 0 0 2.245-2.096l.005-.154v-6.5a.75.75 0 0 1 .75-.75z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </el-button>
          </label>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 50%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}
.header {
  display: flex;
  justify-content: space-between;
}

.input {
  max-width: 100%;
  margin-right: 20px;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
}
.label {
  display: flex;
  align-items: flex-start;
}
.submit {
  height: 100%;
}
</style>

<script lang="ts">
import Draggable from 'vuedraggable'
import { Vue, Component } from 'vue-property-decorator'
import { WEATHER_WIDGET_DATA_HISTORY } from '../constantas'
import HistoryItem from './HistoryItem.vue'

@Component({
  components: {
    HistoryItem,
    Draggable,
  },
  props: {
    isShow: Boolean,
    closeConfig: Function,
  },
})
export default class Form extends Vue {
  isShow!: string
  closeConfig!: () => void

  history: string[] = []
  city = ''

  mounted(): void {
    this.isConfigFromLocalStorageExists()
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

  inputChangeHandler(value: string): void {
    this.city = String(value) || ''
  }

  saveLocation(): void {
    this.history = [...this.history, this.city]
    this.city = ''
    localStorage.setItem(WEATHER_WIDGET_DATA_HISTORY, JSON.stringify(this.history))
    this.closeConfig()
  }
}
</script>
