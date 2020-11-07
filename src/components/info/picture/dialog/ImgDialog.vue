<template>
  <div class="img-dialog-content">
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <el-form>
        <el-upload
            class="upload-demo"
            drag
            action="#"
            accept=".jpg,.png"
            :on-success="onSuccess"
            :on-error="onError"
            multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将要替换的图片拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="closeDialog">取 消</el-button>
    <el-button type="primary" @click="changeUserImg">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ImgDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$emit('closeDialog')
    },
    closeDialog() {
      this.$emit('closeDialog')
    },
    changeUserImg() {
      this.closeDialog()
      this.onSuccess()
      // console.log('手动上传')
    },
    onSuccess() {
      this.$notify({
        title: '成功',
        message: '上传成功',
        type: 'success'
      })
      this.closeDialog()
    },
    onError() {
      this.$notify.error({
        title: '错误',
        message: '上传失败，请检查服务器'
      })
      this.closeDialog()
    },
  }
}
</script>

<style scoped>

</style>
