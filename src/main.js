import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import store from "./store/store"
import Embed from 'v-video-embed'

Vue.config.productionTip = false

//Master Branch API
// axios.defaults.baseURL = 'https://wicked-workout-back.herokuapp.com/api/'

//Dev WickedWorkout API
axios.defaults.baseURL = 'http://localhost:8080/api/'

Vue.prototype.$http = axios

Vue.use(Embed);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')