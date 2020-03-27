<!--  -->
<template>
  <div>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class='content-box'>
      <Breadcrumb></Breadcrumb>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import Sidebar from '../components/common/Sidebar'
import Breadcrumb from '../components/Breadcrumb'

export default {
  data() {
    return {}
  },

  components: {
    Header,
    Sidebar,
    Breadcrumb
  },

  computed: {},

  methods: {}
}
</script>
<style lang='stylus' scoped>
.content-box
  position absolute
  left 6.5em
  top 4em
  right 0em
  bottom 0em
  background #f0f0f0
</style>
