<template>
  <div id="login01">
    <div id="login_box">
      <div id="avater_box">
        <img id="imglogo" src="../assets/logo.png" alt="" />
      </div>
      <div id="biaoge">
      <el-row id="button">
        <el-button type="success" icon="el-icon-check" @click="loginFormTest">登录</el-button>
        <el-button type="info" @click="loginFormClick">重置</el-button>

      </el-row> 
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {


    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
        return {
      ruleForm: {
        pass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };

  },

  methods: {
    onSubmit() {
      console.log("submit!");
    },
    loginFormClick() {
      console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    loginFormTest() {
      // axios({
      //     method: 'GET',
      //     url: 'http://timemeetyou.com:8889/api/private/v1/',
      //     data: {
      //         name1: 'Lan',
      //         name2: '123'
      //     }
      // })
      // .then(function (response) {
      //     console.log(response);
      // })
      // .catch(function (error) {
      //     console.log(error);
      // });

      this.$refs.loginFormRef.validate(valid => {
        // console.log(valid)
        if (!valid) return;
        const result = this.$http.post("login", this.form);
        console.log("result");
        console.log(result);
      });
    }
  }
};
</script>

<style scoped lang="less">
#login01 {
  background-color: #408ab1;
  height: 100%;
}
#login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
}
#avater_box img {
  border: 10px solid #ffffff;
  border-radius: 50%;
  left: 25%;
  margin-top: -30%;
  position: relative;
  background-color: #a7bbb4;
}
#biaoge {
  border: 1px solid white;
  width: 400px;
}
#button {
  left: 36%;
top: 160px;
}
</style>
