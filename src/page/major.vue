<template>
  <div>
    <el-container style="height:100vh;">
      <div class="major-asid">
        <el-aside width="200px">
          <Nav/>
        </el-aside>
      </div>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <HeaderMain/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HeaderMain from "@/components/HeaderMain";
import Nav from "@/components/Nav";

export default {
  name: "major",
  components: {Nav, Header, HeaderMain},
}
</script>

<style scoped lang="scss">
.el-container{
  background: #fff;
  .el-aside{
    height: 100%;
  }
  .el-main{
    border-top: 30px solid #f7f7f7;
    border-left: 30px solid #f7f7f7;
    border-right: 30px solid #f7f7f7;
  }
}
</style>
