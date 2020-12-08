<template>
  <div class="system-content">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item label="头像">
        <img :src="form.pricer" alt=""/>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone"/>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "System",
  data() {
    return {
      form: {
        name: '',
        password:'',
        phone:'',
        pricer:'',
        address: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>
.system-content{
  width: 500px;
  height: 200px;
}
</style>
