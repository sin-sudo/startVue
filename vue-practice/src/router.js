import Vue from 'vue'
import Router from 'vue-router'
import Create from './components/Create.vue'
import List from './components/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/create',
      component: Create
    },
    {
      path: '/list',
      component: List
    },
  ],
})