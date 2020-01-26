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
      path: '/main',
      name: 'main',
      component: () => import('../views/main.vue')
    },{
      path: '/classify',
      name: 'classify',
      component: () => import('../views/classify.vue')
    },{
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart.vue')
    },{
      path: '/user',
      name: 'user',
      component: () => import('../views/user.vue')
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
