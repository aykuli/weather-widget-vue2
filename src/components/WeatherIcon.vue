<template>
  <div id="icon-container">
    <!-- <img :src="iconUrl" /> -->
    <img id="icon" src="../assets/icons/02d2x.png" />
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class WeatherIcon extends Vue {
  @Prop(String)
  public iconName!: string

  iconUrl: string | null | ArrayBuffer = ''

  async mounted(): Promise<void> {
    if (this.iconName) {
      // this.iconUrl = `../assets/icons/${this.iconName}2x.png`
      // this.iconUrl = URL.createObjectURL(`../assets/icons/${this.iconName}2x.png`)
      // await this.getIcon()
    }
  }

  async getIcon(): Promise<void> {
    try {
      const res = await fetch(`../assets/icons/01n.png`)
      const blob = await res.arrayBuffer()
      const iconContainer = document.querySelector('#icon-container')

      let img = document.createElement('img')
      // img.style = 'position:fixed;top:10px;left:10px;width:100px'
      iconContainer?.append(img)
      console.log('iconContainer: ', iconContainer)
      console.log('blob: ', blob)

      // выводим на экран
      // img.src = URL.createObjectURL(blob)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
