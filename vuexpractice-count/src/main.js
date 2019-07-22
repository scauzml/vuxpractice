import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'


Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 配置请求头（推荐）*/
/* axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'; // 配置请求头*/
Axios.defaults.withCredentials = true; 
Vue.use(VueAxios,Axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
