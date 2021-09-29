<template>
  <div class="item">
    <div>
      <i class="el-icon-finished"></i>
      <span> {{ place.city }}</span>
      <span v-if="place.country">, {{ place.country }} </span>
    </div>
    <el-button circle icon="el-icon-delete" type="danger" size="small" @click="() => deleteItem(index)"></el-button>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  transition: background-color ease 500ms;
  padding: 5px;
  align-items: center;
  border-radius: 10px;

  & span {
    font-size: 1rem;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: rgba(233, 233, 233, 0.5);
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
