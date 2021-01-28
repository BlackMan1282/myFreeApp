import Vue from 'vue'
import Router from 'vue-router'
// import loading from '@/components/loading'
import loading from '../page/loading'
import index from '../page/index.vue' // 首页
import forget from '../page/lading/forget.vue' // 忘记密码
import tabbar from '../components/tabbar.vue' // 忘记密码

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: loading
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: tabbar
    }
  ]
})
