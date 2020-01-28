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
       //重定向
       redirect: '/classify/lenove',
      component: () => import('../views/classify.vue'),
      children: [{
        path:'/classify/mi',
        name:'小米',
        component: () => import('../views/sort/mi.vue')
      },{
        path:'/classify/huawei',
        name:'华为',
        component: () => import('../views/sort/huawei.vue')
      },{
        path:'/classify/iphone',
        name:'苹果',
        component: () => import('../views/sort/iphone.vue')
      },{
        path:'/classify/lenove',
        name:'联想',
        component: () => import('../views/sort/lenove.vue')
      },{
        path:'/classify/oneplus',
        name:'一加',
        component: () => import('../views/sort/oneplus.vue')
      },{
        path:'/classify/oppo',
        name:'oppo',
        component: () => import('../views/sort/oppo.vue')
      },{
        path:'/classify/sanxing',
        name:'三星',
        component: () => import('../views/sort/sanxing.vue')
      },{
        path:'/classify/vivo',
        name:'vivo',
        component: () => import('../views/sort/vivo.vue')
      }]
    },{
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart.vue')
    },{
      path: '/user',
      name: 'user',
      component: () => import('../views/user.vue')
    },{
      path:'/me',
      name:'me',
      component: () => import('../views/me.vue')
    }]
  },{
      path: '/reg',
      name: 'reg',
      component: () => import('../views/reg.vue')
    },{
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },{
      path: '/details',
      name: 'details',
      component: () => import('../views/details.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
