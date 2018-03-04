import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/contaiers/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {path:'',component:Home},//默认路由
    {path:'/',redirect:'/home'},//重定向
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
