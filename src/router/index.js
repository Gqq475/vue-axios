import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Demo from '@/components/Demo'
import Game from '@/components/Game'
import Count from '@/components/Count'
import Shop from '@/components/Shop'
import Cnode from '@/components/cnode/Cnode'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cnode',
      name: 'cnode',
      component: Cnode
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/game',
      component: Game,
      name: 'Game'
    },
    {
      path: '/shop',
      component: Shop,
      name: 'Shop'
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      // children: [
      //   {
      //     path: '/demo/game',
      //     component: Game,
      //     name: 'Game'
      //   }
      // ]
    }
  ]
})
