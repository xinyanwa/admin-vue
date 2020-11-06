<template>
  <div class="close-content">
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="closeDialog">取 消</el-button>
    <el-button type="primary" @click="deleteUser">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "CloseDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    closeDialog(){
      this.$emit('closeDialog')
    },
    deleteUser(){
      this.$emit('deleteUser')
    }
  }
}
</script>

<style scoped>

</style>
