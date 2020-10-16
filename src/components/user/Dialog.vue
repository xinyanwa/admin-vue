<template>
  <div class="dialog-content">
    <el-dialog title="编辑角色信息" :visible="dialogFormVisible" @close="closeDialog" width="500px">
      <el-form :model="formDate" ref="form" :rules="rules" :hide-required-asterisk="true" status-icon>
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="user">
          <el-input v-model="formDate.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="formDate.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="formDate.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地区" :label-width="formLabelWidth" prop="address">
          <el-input v-model="formDate.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth" prop="role">
          <el-radio-group v-model="formDate.role">
            <el-radio label="admin"></el-radio>
            <el-radio label="editor"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="changeUserInfo('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {
      formLabelWidth: '80px',
      rules: {
        user: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在3-10个字符之间', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
        ],
        address: [
          {required: true, message: '请输入地址', trigger: 'blur'},
        ],
        role: [
          {required: true, message: '至少选择一项角色权限', trigger: 'blur'},
        ],
      }
    };
  },
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    },
    formDate: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.fromData = {}
      this.$refs.form.resetFields();
      this.$emit('dialog')
    },
    changeUserInfo(form) {
      this.$refs[form].validate((valid) => {
        console.log(this.formDate)
        if (valid) {
          const date = this.formDate
          this.$axios.post('/user/update', {
            userName:date.user
          })
              .then(response => {
                console.log(response)
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
}
</script>

<style scoped>

</style>
