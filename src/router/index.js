// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('../views/FindView.vue')
    },
    {
      path: '/posts-list',
      name: 'posts-list',
      component: () => import('../views/PostsList.vue')
    },
    {
      path: '/post/:tag/:alias',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/dairy-add',
      name: 'dairy-add',
      component: () => import('../views/DairyAdd.vue')
    }
  ]
})

export default router
