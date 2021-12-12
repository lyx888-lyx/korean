import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Olds from '@/views/Olds'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/olds',
    name: 'Olds',
    component: Olds
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
