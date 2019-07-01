import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import router from './router/router'
import mavonEditor from 'mavon-editor'
import vuescroll from 'vuescroll';

import 'mavon-editor/dist/css/index.css'
import './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(mavonEditor)
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'percent',
      detectResize: true
    },
    scrollPanel: {
      initialScrollY: false,
      initialScrollX: false,
      scrollingX: true,
      scrollingY: true,
      speed: 300,
      easing: undefined,
      verticalNativeBarPos: 'right'
    },
    rail: {
      background: '#01a99a',
      opacity: 0,
      size: '6px',
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: '2px',
      keepShow: false
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: 0,
      size: '6px',
      disable: false
    },
    scrollButton: {
      enable: false,
      background: 'rgb(3, 185, 118)',
      opacity: 1,
      step: 180,
      mousedownStep: 30
    }
  }
});

sync(store, router)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
