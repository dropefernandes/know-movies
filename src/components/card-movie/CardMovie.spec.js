import { describe, it, mount, expect } from 'vitest'

import CardMovie from './CardMovie.vue'

describe('CardMovie Component', () => {
  it('should render correctly', async () => {
    const movieProps = {
      coverImage: '/example-cover.jpg',
      title: 'Exemplo de Filme',
      date: '2023-07-22'
    }

    // Monta o componente com as propriedades
    const { getByAltText, getByText } = await mount(CardMovie, {
      props: {
        movie: movieProps
      }
    })

    // Verifica se a imagem está sendo renderizada corretamente
    const imageElement = getByAltText(movieProps.title)
    expect(imageElement).toHaveAttribute(
      'src',
      `https://image.tmdb.org/t/p/w220_and_h330_face${movieProps.coverImage}`
    )

    // Verifica se o título está sendo renderizado corretamente
    const titleElement = getByText(movieProps.title)
    expect(titleElement).toBeInTheDocument()

    // Verifica se a data está sendo formatada corretamente
    const formattedDate = getByText('22 de julho de 2023') // Verifique a formatação conforme sua função dateFormat
    expect(formattedDate).toBeInTheDocument()
  })
})
