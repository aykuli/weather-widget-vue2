<template>
  <div class="item">
    <span> {{ place.city }}, {{ place.country }} </span>
    <el-button circle icon="el-icon-delete" type="danger" size="small" @click="() => deleteItem(index)"></el-button>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  & span {
    font-size: 1rem;
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    index: Number,
    place: Object,
    deleteItem: Function,
  },
})
export default class HistoryItem extends Vue {}
</script>
