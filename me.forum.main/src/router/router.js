import Vue from 'vue'
import Router from 'vue-router'
import Forums from '@/components/Forums/Index'
import Login from '@/components/Authentication/Login'
import Register from '@/components/Authentication/Register'
import Activate from '@/components/Activate/Index'
import Forum from '@/components/Forum/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Forums
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
    },
    {
      path: '/activate/:secret',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/forum/:forumId',
      name: 'Forum',
      component: Forum
    }
  ]
})