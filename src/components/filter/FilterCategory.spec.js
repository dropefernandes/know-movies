import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import FilterCategory from './FilterCategory.vue'
import { useMovieStore } from '@/state/movie'

describe('Filter Category componnet', () => {
  beforeEach(() => vi.clearAllMocks())

  it('renders category options correctly', async () => {
    const store = useMovieStore(createPinia())
    const mockCategories = [
      { id: 'popular', name: 'Os Mais Populares' },
      { id: 'trending', name: 'Tendências' }
    ]

    const wrapper = mount(FilterCategory, {
      global: {
        mocks: {
          store
        }
      }
    })

    expect(wrapper.find('option[value=""]').exists()).toBe(true)
    mockCategories.forEach((category) => {
      expect(wrapper.find(`option[value="${category.id}"]`).text()).toBe(category.name)
    })
  })

  it('updates movie list on category change', async () => {
    const store = useMovieStore(createPinia())

    const wrapper = mount(FilterCategory, {
      global: {
        mocks: {
          store
        }
      }
    })

    await wrapper.find('select').setValue('popular')
    store.setMovieList([{ id: 1, title: 'Movie 1' }])
    expect(store.movie.list).toEqual([{ id: 1, title: 'Movie 1' }])
  })
})
