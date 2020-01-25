import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[{
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }]
  },{
      path: '/reg',
      name: 'reg',
      component: () => import('../views/reg.vue')
    },{
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
