/* eslint-disable no-undef */
import { describe, expect, it, vi } from 'vitest'
import { useFetch } from './useFetch'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' }
        ]
      })
  })
)

describe('useFetch', () => {
  it('fetches data successfully', async () => {
    const { data } = await useFetch('movies')

    expect(data.response).toEqual({
      results: [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' }
      ]
    })

    // Optionally, test specific properties or structure of the response
    expect(data.response.results).toHaveLength(2)
    expect(data.response.results[0].title).toBe('Movie 1')
  })

  it('handles fetch error', async () => {
    // Mock fetch to reject with an error
    global.fetch.mockImplementationOnce(() => Promise.reject('Fetch error'))

    const { data } = await useFetch('invalid-url')

    // Check that the error is properly handled
    expect(data.response).toBe('Fetch error')
  })
})
