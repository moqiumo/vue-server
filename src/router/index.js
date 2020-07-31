import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


// 挂在路由导航守卫 next() 表示放行 next('/login')表示强制跳转
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  // console.log(tokenStr)
  if (!tokenStr) return next('/login')
  next()
})
export default router;