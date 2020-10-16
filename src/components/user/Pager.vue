<template>
  <div class="pager-content">
    <div class="block">
      <el-pagination
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total=userInfoNumber>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pager",
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {};
  },
  props: {
    userInfoNumber: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>
