import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/tourists/Home'
import Program from '../components/tourists/Program'
import Scheduler from '../components/scheduler/Scheduler'
import Tutors from '../components/scheduler/Tutors'
import UserProfile from '../components/account/UserProfile'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/program',
    name: 'Program',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/tourists/Program.vue')
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/account/UserProfile.vue')
  },
  {
    path: '/scheduler',
    name: 'Scheduler',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/scheduler/Scheduler.vue')
  },
  {
    path: '/tutors',
    name: 'Tutors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/scheduler/Tutors.vue')
  },
  {
    path: '/onlineclass',
    name: 'OnlineClass',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/classroom/OnlineClass.vue')
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
