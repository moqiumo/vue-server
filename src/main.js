// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
// 导入全局样式
import './plugin/element.js'
import './assets/global.css'

import axios from 'axios'//引入axios
axios.defaults.baseURL = 'http://127.0.0.1:8080/'//配置的请求根路径
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})
Vue.prototype.$axios = axios;//把axios挂载到vue上


Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
