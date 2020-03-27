<!--  -->
<template>
  <div class='sidebar'>
    <el-menu class='sidebar-el-menu' :collapse='collapse' :default-active='onRoutes' background-color='#324157' text-color='#bfcbd9'
    active-text-color='#20a0ff' unique-opened router>
      <template v-for='item in items'>
        <template>
          <el-menu-item :index='item.index' :key='item.index'>
            <i :class='item.icon'></i><span slot='title'>{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          title: '系统首页',
          icon: 'fas fa-home',
          index: 'dashboard'
        },
        {
          title: '用户管理',
          icon: 'fas fa-user',
          index: 'user'
        }
      ]
    }
  },

  components: {},

  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  },

  methods: {}
}
</script>
<style lang='stylus' scoped>
.sidebar
  position absolute
  top 4em
  left 0em
  bottom 0em
  & ul
      height 100%

</style>
