<template>
  <div id="login01">
  <div id="login_box">


<div id="avater_box">
  <img id="imglogo" src="../assets/logo.png" alt="">
</div>
    <div id="biaoge">
      <el-form ref="loginFormRef" :model="form" label-width="50px" :rules="rules"  >
        <el-form-item prop="nameForm">
          <el-input  v-model="form.name1" width="50" prefix-icon="el-icon-user-solid" ></el-input>
        </el-form-item>
        <el-form-item prop="namePassword">
          <el-input v-model="form.name2" prefix-icon="el-icon-loading"></el-input>
        </el-form-item>
      </el-form>
      <el-row id="button">
        <el-button type="success" icon="el-icon-check" @click="loginFormTest">登录</el-button>
        <el-button type="info" @click="loginFormClick">重置</el-button>

      </el-row>
    </div>
  </div>
  </div>

</template>

<script>

  export default {
    name: "Login",
    data() {
      return {
        form: {
          name1: '',
          name2: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          nameForm: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          namePassword: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符密码', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      loginFormClick(){
        console.log(this)
        this.$refs.loginFormRef.resetFields()
      },
      loginFormTest(){
        this.$refs.loginFormRef.validate((valid) =>{
          // console.log(valid)
          if(!valid) return;
          const result= this.$http.post('login',this.form);
          console.log("result")
          console.log(result)


        })

      }
    }
  }
</script>

<style scoped lang="less">
#login01{
  background-color: #408ab1;
  height: 100%;
}
  #login_box{
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 10px;
    transform: translate(-50%,-50%);

  }
  #avater_box img{
    border: 10px solid #ffffff;
    border-radius: 50%;
    left: 25%;
   margin-top:-30%;
    position: relative;
    background-color: #a7bbb4;
  }
  #biaoge{
    border: 1px solid white;
    width: 400px;
  }
  #button{
    left: 36%;
  }
</style>
