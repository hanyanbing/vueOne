import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import food from '@/components/food'
import talk from '@/components/talk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect:'/food',  //默认子路由
      children:[ //子路由
        {
          path:'food',
          component:food,
          meta:{
            keepAlive: true // 需要被缓存
          }
        },
        {
          path:'talk',
          component:talk,
          meta:{
            keepAlive: false // 不需要缓存
          }
        }
      ]
    }
  ]
})
