import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Embed from 'v-video-embed'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://wicked-workout-back.herokuapp.com/api/'
Vue.prototype.$http = axios

Vue.use(Embed);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
