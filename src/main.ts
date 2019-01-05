import Vue from 'vue'

import App from './App'
import { store } from './store'
import router from './router/Router'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#root')
