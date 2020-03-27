<template>
    <div class='login-wrap'>
      <div class='login'>
        <div class='title'>个人助手系统</div>
        <div class='el-form content'>
          <el-form ref='loginForm' :rules='loginRules' :model='loginForm' label-width='0px'>
            <el-form-item prop='username'>
              <el-input v-model='loginForm.username'>
                <el-button slot='prepend' icon='far fa-user'></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop='password'>
              <el-input type='password' v-model='loginForm.password'>
                <el-button slot='prepend' icon='fas fa-lock'></el-button>
              </el-input>
            </el-form-item>
            <div class='login-btn'>
              <el-button type='primary' @click='login("loginForm")'>登陆</el-button><!-- class='btn btn-primary btn-sm' -->
            </div>
          </el-form>
        </div>
      </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  data: function () {
    return {
      loginForm: {
        username: 'admin',
        password: 'abc123'
      },
      loginRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  computed: {
    ...mapState({
      username: state => state.user.name
    })
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch('Login', this.loginForm).then(() => {
            console.log(this.username)
            this.$router.push('/home')
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.login-wrap
  position: relative
  width: 100%
  height: 100%
  background-color: #17a2b8

.login
  left: 50%
  top: 50%
  position: absolute
  width:350px
  background: hsla(0,0%,100%,0.3)
  margin: -190px 0 0 -175px
  border-radius: 5px;

.title
  font-size: 1.5em
  border-bottom: 1px solid #ddd
  line-height: 2.5em
.content
  padding: 1.5em

.login-btn
  text-align:center

.login-btn button
  width:100%

</style>
