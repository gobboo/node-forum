import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Login from '@/components/Login/Index'
import NewBlog from '@/components/NewBlog/Index'
import ViewBlog from '@/components/ViewBlog/Index'
import EditBlog from '@/components/EditBlog/Index'
import Blogs from '@/components/Blogs/Index'
import Resume from '@/components/Resume/Index'
import Users from '@/components/Admin/Users/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/blogs/new',
      name: 'NewBlog',
      component: NewBlog
    },
    {
      path: '/blog/:blogId',
      name: 'ViewBlog',
      component: ViewBlog
    },
    {
      path: '/blog/:blogId/edit',
      name: 'EditBlog',
      component: EditBlog
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/admin/users',
      name: 'Users',
      component: Users
    }
  ]
})