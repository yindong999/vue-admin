<!--  -->
<template>
  <div class='header'>
    <div class="collapse-btn">
      <i class="el-icon-menu ml-1"></i>
    </div>
    <div class='logo'>个人助手</div>
    <div class='header-right'>
      <div class="user-avator"><img src="static/img/user.png" class="rounded-circle" width="40px" height="40px"></div>
      <el-dropdown class="username">
        {{username}}
        <el-dropdown-menu slot="dropdown">
          <span>关于作者</span>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'byg'
    }
  },

  components: {},

  computed: {
    username() {
      let username = localStorage.getItem('username') || this.name
      return username
    }
  },

  methods: {}
}
</script>
<style lang='stylus' scoped>
.header
  height 4em
  width 100%
  color #fff
  background-color #242f42
  & .collapse-btn
    margin-left 0.2em
    font-size 1.3em
    line-height 3.4em
    display inline-block
  & .logo
    line-height 3.4em
    font-size 1.2em
    display inline-block
  & .header-right
    display flex
    float right
    height 4em
    align-items center
    padding-right 2em
    & .username
      margin-left 0.5em
      color #fff
</style>
