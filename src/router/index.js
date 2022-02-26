import { createRouter, createWebHistory } from 'vue-router'
import Search from '/src/views/search.vue'
import track from '/src/views/TrackDetail.vue'

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/track/:id',
    name: 'track',
    component: track
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
