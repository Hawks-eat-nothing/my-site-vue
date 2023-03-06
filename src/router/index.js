import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/photos',
    name: 'photos',
    component: ()=>import('../views/PhotosView')
  },
  {
    path: '/photoDetail',
    name: 'photoDetail',
    component: ()=>import('../views/PhotoDetailView')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: ()=>import('../views/BlogsView')
  },
  {
    path: '/blogDetail',
    name: 'blogDetail',
    component: ()=>import('../views/BlogDetailView')
  },
  {
    path: '/tools',
    name: 'tools',
    component: ()=>import('../views/ToolsView')
  },
  {
    path: '/toolDetail',
    name: 'toolDetail',
    component: ()=>import('../views/ToolDetailView')
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import('../views/AboutView')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: ()=>import('../views/admin/DashBoardBackView')
  },
  {
    path: '/photosupload',
    name: 'photosupload',
    component: ()=>import('../views/admin/PhotosUploadView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
