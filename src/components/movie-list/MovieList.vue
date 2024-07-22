<template>
  <ul class="flex gap-2 items-center flex-wrap justify-center mt-8">
    <li v-for="movie in movieList" :key="movie.id">
      <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
        <card-movie
          :movie="{
            coverImage: movie.poster_path,
            title: movie.title,
            date: movie.release_date
          }"
        />
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { computed, onMounted } from 'vue'

import { useMovieStore } from '@/state/movie'

import CardMovie from '@components/card-movie/CardMovie.vue'
import { useFetch } from '@/api/composables/useFetch'

const store = useMovieStore()
const movieList = computed(() => store.movie.list)

onMounted(() => {
  useFetch('movie/now_playing').then(({ data }) => {
    store.setMovieList(data.response.results)
  })
})
</script>
