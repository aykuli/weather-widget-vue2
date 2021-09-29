<template>
  <div class="container">
    <p>{{ errMsg }}</p>
    <div slot="footer" class="footer">
      <el-button @click="closeErrModal = false">Close</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  & p {
    margin: 0;
    margin-bottom: 20px;
    font-size: 1rem;
  }
  .footer {
    text-align: right;
  }
}
</style>

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
