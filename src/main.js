import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import qs from 'qs'
import echarts from 'echarts'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://127.0.0.1:9000'

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.config.devtool = true

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
