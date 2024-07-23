<template>
  <form class="group relative">
    <svg
      width="20"
      height="20"
      fill="currentColor"
      class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      />
    </svg>
    <input
      class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none md:w-[500px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
      type="text"
      aria-label="Digite o nome do filme"
      placeholder="Digite o nome do filme..."
      @change="store.setSearch($event.target.value)"
      @input="store.setSearch($event.target.value)"
      @keyup.enter="searchMovie"
      @keydown.enter="searchMovie"
      v-on:keydown.enter.prevent
    />
  </form>
  <button
    @click="searchMovie"
    type="submit"
    :disabled="!search"
    class="disabled:opacity-50 flex-none rounded-md bg-current-line px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-foreground"
  >
    Pesquisar
  </button>
</template>

<script setup>
import { useFetch } from '@/api/composables/useFetch'
import { useMovieStore } from '@/state/movie'
import { computed } from 'vue'

const store = useMovieStore()
const search = computed(() => store.movie.filters.search)

const searchMovie = () => {
  useFetch(`search/movie?query=${search.value}`).then(({ data }) => {
    console.log(data)
    store.setMovieList(data.response.results)
  })
}
</script>
