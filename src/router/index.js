import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: resolve => require(['../views/Home'], resolve),
      meta: {
        permission: true,
        title: '首页'
      },
      children: [
        {
          path: '/home',
          component: resolve => require(['../views/Dashboard'], resolve)
        },
        {
          path: '/dashboard',
          meta: {
            title: '系统首页'
          },
          component: resolve => require(['../views/Dashboard'], resolve)
        },
        {
          path: '/user',
          meta: {
            title: '用户管理'
          },
          component: resolve => require(['../views/User'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/Login'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: resolve => require(['../views/404'], resolve)
    }
  ]
})

export default router
