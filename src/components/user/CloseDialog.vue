<template>
  <div class="close-content">
    <el-dialog
        title="删除用户"
        :visible.sync="dialogVisible"
        width="30%"
        @close="closeDialog">
      <span>确定删除该用户</span>
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
    closeDialog() {
      this.$emit('closeDialog')
    },
    deleteUser() {
      this.$emit('deleteUser')
    }
  }
}
</script>

<style scoped>

</style>
