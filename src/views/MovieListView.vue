<template>
  <div class="mt-4 max-w-[1020px] m-auto flex flex-col sm:p-4">
    <h1 class="text-2xl font-bold text-foreground text-center">{{ title }}</h1>

    <div class="flex items-center gap-2 mt-10">
      <input-search />
    </div>

    <div class="mt-8">
      <filter-category />
    </div>
  </div>

  <Suspense>
    <movie-list />
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { ref } from 'vue'

import MovieList from '@components/movie-list/MovieList.vue'
import InputSearch from '@components/input-search/InputSearch.vue'
import FilterCategory from '@/components/filter/FilterCategory.vue'

const title = ref('Know Movies 🎬')
</script>
