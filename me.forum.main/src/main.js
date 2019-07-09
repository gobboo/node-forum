import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import router from './router/router'
import mavonEditor from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'
import './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(mavonEditor)

sync(store, router)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
