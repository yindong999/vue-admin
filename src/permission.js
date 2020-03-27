import router from '@/router'

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('username')
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.premission) {
    role === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})
