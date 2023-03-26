import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path : '/Auth/:title',
    name: 'Auth/:title',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/Video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Buy',
    name: 'Buy',
    component: () => import('../views/Buy.vue')
  },
  {
    path: '/Rent',
    name: 'Rent',
    component: () => import('../views/Rent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
