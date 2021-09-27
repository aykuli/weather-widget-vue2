<template>
  <div>
    <img :src="iconUrl" />
    <img src="../assets/icons/01n.png" />
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class WeatherIcon extends Vue {
  @Prop(String)
  public iconName!: string

  iconUrl = ''

  mounted(): void {
    if (this.iconName) {
      this.iconUrl = `../assets/icons/${this.iconName}2x.png`
      // this.iconUrl = URL.createObjectURL(`../assets/icons/${this.iconName}2x.png`)
    }
  }
}
</script>
