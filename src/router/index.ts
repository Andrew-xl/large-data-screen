import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import PageTwo from '../views/page-two/PageTwo.vue'
import PageThree from '../views/page-three/PageThree.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pageTwo',
    name: 'PageTwo',
    component: PageTwo
  },
  {
    path: '/pageThree',
    name: 'pageThree',
    component: PageThree
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
