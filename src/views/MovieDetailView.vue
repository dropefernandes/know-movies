<template>
  <Suspense>
    <main
      class="py-6 px-4 sm:p-6 md:py-10 md:px-8 text-foreground flex gap-4 sm:flex-nowrap flex-col sm:flex-row"
    >
      <img :src="image" alt="" class="w-[400px] h-full object-cover rounded-lg" loading="lazy" />
      <div class="mt-4">
        <div
          class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
        >
          <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">
            {{ movieDetail.title }}
          </h1>
        </div>
        <dl
          class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2 gap-4"
        >
          <dt class="sr-only">Reviews</dt>
          <dd class="text-indigo-600 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-comment"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <span class="ml-1 text-comment"
              >4.89 <span class="text-slate-400 font-normal">(128)</span></span
            >
          </dd>
          <dd class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-comment"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <span class="ml-1 text-comment">{{ releaseDate }}</span>
          </dd>

          <dd class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-comment"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span class="ml-1 text-comment">{{ runtime }}</span>
          </dd>
        </dl>
        <p class="mt-4">
          {{ movieDetail.overview }}
        </p>
      </div>
    </main>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useFetch } from '@/api/composables/useFetch'
import { useMovieStore } from '@/state/movie'
import { dateFormat, timeFormat } from '@/utils'

const route = useRoute()
const store = useMovieStore()

const movieDetail = computed(() => store.movie.details)
const image = computed(
  () => `https://image.tmdb.org/t/p/w220_and_h330_face${movieDetail.value.poster_path}`
)
const releaseDate = computed(() => dateFormat(movieDetail.value.release_date))
const runtime = computed(() => timeFormat(movieDetail.value.runtime))

onMounted(() => {
  useFetch(`movie/${route.params.id}`).then(({ data }) => {
    store.setMovie(data.response)
  })
})
</script>
