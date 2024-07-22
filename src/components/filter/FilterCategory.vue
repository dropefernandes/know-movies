<template>
  <div class="relative h-10 w-72 min-w-[200px]">
    <select
      class="bg-selection peer h-full w-full rounded-[7px] border border-selection border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-foreground outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-selection placeholder-shown:border-t-selection empty:!bg-selection focus:border-2 focus:border-selection focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-selection"
      @change="orderBy($event.target.value)"
    >
      <option value="">Filtre por categoria</option>
      <option v-for="category in caterogies" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-foreground transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-selection before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-selection after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
    >
      Categorias
    </label>
  </div>
</template>

<script setup>
import { useFetch } from '@/api/composables/useFetch'
import { useMovieStore } from '@/state/movie'
import { computed } from 'vue'

const store = useMovieStore()
const caterogies = computed(() => store.movie.categories)

const orderBy = (category) => {
  const urlByCategory = {
    popular: 'movie/popular',
    trending: 'trending/all/day'
  }

  if (category) {
    useFetch(urlByCategory[category]).then(({ data }) => {
      store.setMovieList(data.response.results)
    })
  }
}
</script>
