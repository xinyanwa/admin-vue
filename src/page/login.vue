<template>
  <div class="login">
    <div class="login-content">
      <div class="login-title">
        <h3 class="title-login">登录</h3>
        <h3 class="title-register">注册</h3>
      </div>
      <div class="login-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" status-icon>
          <el-form-item prop="name" class="login-user">
            <el-input v-model="ruleForm.name" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"
                      size="medium"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" prefix-icon="el-icon-lock" type="password" size="medium"
                      placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="login-button">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
      }
    };
  },
  computed: {
  },
  methods: {
    submitForm: async function (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.$axios.post('/user', this.$qs.stringify({
            userName: this.ruleForm.name,
            password: this.ruleForm.password
          })).then(response => {
            const {msg, code} = response.data
            if (code === 200) {
              // console.log(111+response.data.data.response[0])
              sessionStorage.setItem('userName', response.data.data.response[0].user)
              sessionStorage.setItem('userPicture', response.data.data.response[0].picture)
              // this.$store.dispatch('handleSetUserInfo',response.data.data.response[0])
              this.$router.push('/main')
              this.$message({
                message: msg,
                type: "success",
                showClose: true,
              })
            } else {
              this.$message({
                message: msg,
                type: "error",
                showClose: true,
              })
            }
          }).catch(() => {
            this.$message({
              message: '登录失败，请检查用户名或密码',
              type: "error",
              showClose: true,
            })
          })
        } else {
          this.$message({
            message: '用户名或密码验证失败',
            type: "error",
            showClose: true
          })
          return false;
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #2d3a4b;

  .login-content {
    max-width: 1220px;

    .login-title {
      margin-top: 200px;
      display: flex;
      justify-content: center;
      font-size: 20px;

      .title-login {
        color: #fff;
        margin: 0 10px;
        padding: 10px 40px;
        background: #2f4255;
        text-align: center;
      }

      .title-register {
        color: #fff;
        margin: 0 10px;
        padding: 10px 40px;
        text-align: center;
      }
    }

    .login-form {
      margin: 0 auto;

      .login-user {
        margin: 30px auto;
      }

      .login-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>
