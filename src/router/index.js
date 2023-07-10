import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/multiply',
    name: 'multiply',
    component: () => import('../views/MultiplyView.vue')
  },
  {
    path: '/star',
    name: 'star',
    component: () => import('../views/StarView.vue')
  },
  {
    path: '/star2',
    name: 'star2',
    component: () => import('../views/StarView2.vue')
  },
  {
    path: '/studentForm',
    name: 'studentForm',
    component: () => import('../views/studentForm.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
