<!-- 面包屑导航 -->
<template>
  <div>
    <el-breadcrumb class='breadcrumb mb-2' separator='/'>
      <el-breadcrumb-item v-for='(item, index) in levelList' :key='index' :to='item.path'>{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levelList: []
    }
  },

  components: {},

  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },

  created() {
    this.getBreadcrumb()
  },

  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => {
        // if (item.meta.title) {
        return true
        // }
      })
      // const first = matched[0]
      this.levelList = matched
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>
