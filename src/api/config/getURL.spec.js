import { describe, expect, test } from 'vitest'
import { getURL } from './'

describe('GET URL FUNCTION URIL', () => {
  test('deve gerar URL corretamente sem parâmetros existentes', () => {
    const path = 'movie/popular'
    const expectedURL = `https://api.themoviedb.org/3/movie/popular?api_key=8301f46923b8f5b8c0ec187d61d3c5c2`

    const generatedURL = getURL(path)

    expect(generatedURL).toEqual(expectedURL)
  }),
    test('deve gerar URL corretamente sem parâmetros existentes', () => {
      const path = 'search/movie?query=avengers'
      const expectedURL = `https://api.themoviedb.org/3/search/movie?query=avengers&api_key=8301f46923b8f5b8c0ec187d61d3c5c2`

      const generatedURL = getURL(path)

      expect(generatedURL).toEqual(expectedURL)
    })
})
