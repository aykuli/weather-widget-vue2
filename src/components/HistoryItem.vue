<template>
  <div>
    <p>
      {{ city }}
    </p>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class HistoryItem extends Vue {
  @Prop(String)
  public city!: string
}
</script>
