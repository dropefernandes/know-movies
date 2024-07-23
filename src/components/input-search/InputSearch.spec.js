import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createPinia } from 'pinia'

import { useMovieStore } from '@/state/movie'
import InputSearch from './InputSearch.vue'
import { useFetch } from '@/api/composables/useFetch'

const mockData = {
  data: {
    response: {
      results: [
        { id: 1, title: 'Avengers' },
        { id: 2, title: 'Avengers: Age of Ultron' }
      ]
    }
  }
}

vi.mock('@api/composables/useFetch', () => ({
  useFetch: vi.fn()
}))

describe('InputSearch', () => {
  it('renders input and button correctly', async () => {
    const store = useMovieStore(createPinia())
    const wrapper = mount(InputSearch, {
      global: {
        mocks: {
          store
        }
      }
    })

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('updates search state on input change', async () => {
    const store = useMovieStore(createPinia())
    const wrapper = mount(InputSearch, {
      global: {
        mocks: {
          store
        }
      }
    })
    const input = wrapper.find('input')

    await input.setValue('Avengers')
    expect(store.movie.filters.search).toBe('Avengers')
  })

  it('calls useFetch with correct search query', async () => {
    const store = useMovieStore(createPinia())
    const wrapper = mount(InputSearch, {
      global: {
        mocks: {
          store,
          useFetch
        }
      }
    })

    useFetch.mockResolvedValue(mockData)

    const input = wrapper.find('input')

    await input.setValue('Avengers')

    await wrapper.find('button').trigger('click')

    await wrapper.vm.searchMovie()

    expect(useFetch).toHaveBeenCalledWith('search/movie?query=Avengers')
    expect(store.movie.list).toEqual([
      { id: 1, title: 'Avengers' },
      { id: 2, title: 'Avengers: Age of Ultron' }
    ])
  })
})
