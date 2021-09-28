<template>
  <div>
    <span>{{ errMsg }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeErrModal = false">Close</el-button>
    </span>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    errMsg: String,
    closeErrModal: Function,
  },
})
export default class ErrorModal extends Vue {}
</script>
