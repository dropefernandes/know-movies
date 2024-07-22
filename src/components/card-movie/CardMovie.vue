<template>
  <div>
    <div
      class="w-64 p-4 h-[448px] text-foreground hover:scale-105 transition-all duration-500 cursor-pointer"
    >
      <div class="bg-selection rounded-lg shadow-lg">
        <img :src="image" :alt="movie.title" class="rounded-t-lg w-full object-cover" lazy />
        <div class="p-4">
          <h2 class="text-sm font-semibold">{{ title }}</h2>
          <span class="text-xs">{{ dateFormat(date) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { dateFormat } from '@/utils'

const props = defineProps({
  movie: {
    coverImage: String,
    title: String,
    date: String
  }
})
const { coverImage, title, date } = props.movie
const image = computed(() => `https://image.tmdb.org/t/p/w220_and_h330_face${coverImage}`)
</script>
