import Vue from 'vue'
import Router from 'vue-router'
import Forum from '@/components/Forums/Index'
import Login from '@/components/Authentication/Login'
import Register from '@/components/Authentication/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Forum
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})