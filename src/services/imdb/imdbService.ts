import { Trending } from '../../api/imdb/imdbAPIModels'
import { api } from '../../api/imdb/imdbApi'

async function getTrending(trending = 'all', page = 1): Promise<Trending> {
  const token = process.env.REACT_APP_TMDB_TOKEN
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  console.log(page)
  const result = await api.get<Trending>(
    `trending/${trending}/day?language=pt-Br&page=${page}}`,
    config,
  )

  return result.data
}

export const imdbService = {
  getTrending,
}
