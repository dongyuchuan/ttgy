import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/contaiers/Home/Home.vue'
import Cart from '../components/contaiers/Cart/Cart.vue'
import Cart2 from '../components/contaiers/Cart/Cart2.vue'

import Login from '../components/contaiers/Login/Login.vue'
import Mine from '../components/contaiers/Mine/Mine.vue'


Vue.use(Router)

import store from '../store'
export default new Router({
  routes: [
    // {path:'',component:Home},//默认路由
    {path:'/',redirect:'/home'},//重定向
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/cart2',
      name: 'cart2',
      component: Cart2
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path:'/mineinfo',name:'mineinfo',redirect:to=>{
        //判断是否登陆...
        let {username} = store.state.particles.userInfo
        return {name:username?'mine':'login'}
      }
    },
    {
        path:'/mineinfos',name:'mineinfos',redirect:to=>{
          //判断是否登陆...
          let {username} = store.state.particles.userInfo
          return {name:username?'cart':'login'}
          
        }
    }
    
  ]
})
