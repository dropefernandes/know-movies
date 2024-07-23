import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import CardMovie from './CardMovie.vue'

describe('CardMovie Component', () => {
  it('renders movie information correctly', () => {
    const movie = {
      coverImage: 'test-image.jpg',
      title: 'Test Movie',
      date: '2023-01-01'
    }

    const wrapper = shallowMount(CardMovie, {
      props: {
        movie
      }
    })

    expect(wrapper.find('.bg-selection').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(
      `https://image.tmdb.org/t/p/w220_and_h330_face${movie.coverImage}`
    )
    expect(wrapper.find('img').attributes('alt')).toBe(movie.title)
    expect(wrapper.find('h2').text()).toBe(movie.title)
    expect(wrapper.find('span').text()).toBe('1 Jan 2023')
  })
})
