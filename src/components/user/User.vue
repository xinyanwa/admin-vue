<template>
  <div class="user-content">
    <div class="user-button">
      <div class="button-handle">
        <el-button size="small" icon="el-icon-plus" type="primary" @click="openDialog">添加</el-button>
        <el-button size="small" icon="el-icon-delete" type="danger">批量删除</el-button>
      </div>
      <div class="button-query">
        <el-input size="small"></el-input>
        <el-button size="small" icon="el-icon-search" type="primary" class="query-main">查询</el-button>
      </div>
    </div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="user"
          align="center"
          label="用户名">
      </el-table-column>
      <el-table-column
          prop="phone"
          align="center"
          label="手机号">
      </el-table-column>
      <el-table-column
          prop="address"
          align="center"
          label="地区">
      </el-table-column>
      <el-table-column
          prop="role"
          align="center"
          label="角色">
      </el-table-column>
      <el-table-column
          align="center"
          label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="small">删除</el-button>
          <el-button type="success" size="small" @click="openDialog(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="user-page">
      <Pager :user-info-number="tableData.length"/>
    </div>
    <Dialog :dialog-form-visible="dialog" :form-date="fromData" @dialog="changedialog" @updateSuccess="updateSuceess"></Dialog>
  </div>
</template>

<script>
import Pager from "@/components/user/Pager";
import Dialog from "@/components/user/Dialog";

export default {
  name: "User",
  components: {Dialog, Pager},
  data() {
    return {
      tableData: [],
      dialog: false,
      fromData:{},
    }
  },
  methods: {
    getUserInfo() {
      this.$axios.get('/user/info').then(response => {
        const {code, msg} = response.data
        if (code) {
          this.$message({
            type: "success",
            message: msg,
            showClose: true
          })
          this.$store.dispatch('handleSetUserInfo', response.data.data.response)
          this.tableData = [...response.data.data.response]
        } else {
          this.$message({
            type: "error",
            message: msg,
            showClose: true,
          })
        }
      })
    },
    userInfo(){
      if (this.$store.state.userInfo.length > 0 && this.$store.state.userInfo) {
        this.tableData = [...this.$store.state.userInfo]
      } else {
        this.getUserInfo()
      }
    },
    openDialog(scope){
      this.fromData = {...this.tableData[scope]}
      console.log(this.tableData)
      this.dialog = true
    },
    changedialog(){
      this.dialog = false
    },
    updateSuceess(){
      this.getUserInfo()
    }
  },
  created() {
    this.userInfo()
  },
  mounted() {
    this.$store.dispatch('handleSetRouteInfo',/*this.$route.path*/'用户管理')
    // console.log(this.$route.path)
  }
}
</script>

<style lang="scss" scoped>
.user-content {
  .user-button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .button-handle {

    }

    .button-query {
      display: flex;
      justify-content: space-between;

      .query-main {
        margin-left: 10px;
      }
    }
  }

  .user-page {
    margin: 40px auto;
  }
}
</style>
