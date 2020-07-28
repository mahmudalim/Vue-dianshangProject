<template>
  <div id="login01">
  <div id="login_box">


<div id="avater_box">
  <img id="imglogo" src="../assets/logo.png" alt="">
</div>
    <div id="biaoge">
      <el-form ref="form" :model="form" label-width="50px">
        <el-form-item>
          <el-input v-model="form.name1" width="50"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
      </el-form>
      <el-row id="button">
        <el-button type="success">登录</el-button>
        <el-button type="info">重置</el-button>

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
