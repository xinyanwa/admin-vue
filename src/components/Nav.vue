<template>
  <div class="nav-content">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleClick"
        background-color="#344a5f"
        text-color="#fff"
        active-text-color="#1890FF">
      <el-menu-item index="/main/index">
        <i class="el-icon-s-platform"></i>
        <span>控制台</span>
      </el-menu-item>
      <el-menu-item index="/main/info">
        <i class="el-icon-tickets"></i>
        <span slot="title">信息管理</span>
      </el-menu-item>
      <el-menu-item index="/main/user">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data(){
    return{
      activeIndex: this.$route.path
    }
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(key) {
      // console.log(this.$route.path)
      switch (key) {
        case '/main/index':
          this.$router.push('/main/index')
          break;
        case '/main/info':
          this.$router.push('/main/info')
          break;
        case '/main/user':
          this.$router.push('/main/user')
          break;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-content {
  height: 100%;

  .el-menu {
    border-right-width: 0;
    height: 100%;
  }
}
</style>
