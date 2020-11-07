<template>
  <div class="user-content">
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="user"
          label="用户名"
          width="200">
      </el-table-column>
      <el-table-column
          prop="picture"
          label="头像">
        <template slot-scope="scope">
          <div ref="userImg" class="user-picture">
            <el-image :src="scope.row.picture || userPicture" :preview-src-list=" [scope.row.picture || userPicture]"
                      lazy/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="150">
        <template>
          <el-button type="primary" size="small" @click="handUserImg">查看</el-button>
          <el-button type="success" size="small" @click="changeUserImg">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <ImgDialog :dialog-visible="openDialog" @closeDialog="closeDialog"/>
  </div>
</template>

<script>
import ImgDialog from "@/components/info/picture/dialog/ImgDialog";
export default {
  name: "UserPicture",
  components: {ImgDialog},
  data() {
    return {
      tableData: [],
      userPicture: 'https://i.ibb.co/yQZKdtS/weiwei1.jpg',
      openDialog: false
    }
  },
  methods: {
    getUserInfo() {
      if (this.$store.state.userInfo.length > 0 && this.$store.state.userInfo) {
        this.tableData = [...this.$store.state.userInfo]
      } else {
        this.getUser()
      }
    },
    getUser() {
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
    handUserImg() {
      this.$notify({
        title: '成功',
        message: '请点击图片进行查看',
        type: 'success',
        duration: 3000
      });
    },
    changeUserImg(){
      this.openDialog = true
    },
    closeDialog(){
      this.openDialog = false
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>

.user-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;

  el-img {
    width: 100%;
  }
}
</style>
