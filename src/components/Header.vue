<template>
  <div class="header-content">
    <div class="header-main">
      <div class="header-crumbs">
        <i class="el-icon-s-fold"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>{{this.$store.state.routeInfo}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="header-portrait">
        <div class="portrait-img">
          <img :src="getUserPicture" alt="weiwei" border="0">
        </div>
        <div class="portrait-title">
          <h4>{{ this.getUserName }}</h4>
        </div>
        <div class="portrait-exit">
          <i class="el-icon-close"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    getUserName() {
      if (sessionStorage.getItem('userName')) {
        return sessionStorage.getItem('userName')
      } else {
        return 'weiwei3344'
      }
    },
    getUserPicture() {
      if (sessionStorage.getItem('userPicture')) {
        return sessionStorage.getItem('userPicture');
      } else {
        return 'https://tse2-mm.cn.bing.net/th/id/OIP.jogpN2lmbZSn7CCr2j_oqAHaHa?w=148&h=150&c=7&o=5&dpr=1.25&pid=1.7'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.header-content {
  .header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-crumbs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 25px;

      i {
        margin-right: 20px;
      }
    }

    .header-portrait {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .portrait-img {
        width: 40px;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .portrait-title {
        margin-left: 20px;
        margin-right: 20px;
      }

      .portrait-exit {
        margin-right: 20px;
        font-size: 25px;
      }
    }
  }
}
</style>
