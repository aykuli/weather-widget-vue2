<template>
  <div class="item">
    <div>
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
      >
        <path
          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
          fill="currentColor"
        ></path>
      </svg>
      <span> {{ place.city }}</span>
      <span v-if="place.country">, {{ place.country }} </span>
    </div>
    <el-button circle type="danger" size="small" @click="() => deleteItem(index)">
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
      >
        <path d="M12 12h2v12h-2z" fill="currentColor"></path>
        <path d="M18 12h2v12h-2z" fill="currentColor"></path>
        <path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path>
        <path d="M12 2h8v2h-8z" fill="currentColor"></path>
      </svg>
    </el-button>
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
