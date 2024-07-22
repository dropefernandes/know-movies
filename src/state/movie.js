import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  const movie = ref({
    list: [],
    details: {},
    categories: [
      {
        id: 'trending',
        name: 'Tendências'
      },
      {
        id: 'popular',
        name: 'Os Mais Populares'
      }
    ],
    error: '',
    filters: {
      search: '',
      orderBy: ''
    }
  })

  const setMovieList = (movies) => {
    movie.value.list = movies
  }

  const setMovie = (movieDetails) => {
    movie.value.details = movieDetails
  }

  const setSearch = (value) => {
    movie.value.filters.search = value
  }

  return { movie, setMovieList, setMovie, setSearch }
})
