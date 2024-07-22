import { createRouter, createWebHistory } from 'vue-router'

import MovieListView from '@views/MovieListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'movie-list-view',
      component: MovieListView
    },
    {
      path: '/movie/:id',
      name: 'movie-details',
      component: () => import('@views/MovieDetailView.vue')
    }
  ]
})

export default router
