import { IMDBDetails } from '../api/imdb/imdbAPIModels'

function highScore(data: IMDBDetails[]) {
  data.sort((a, b) => {
    if (a.vote_average > b.vote_average) {
      return -1
    }
    if (a.vote_average < b.vote_average) {
      return 1
    }
    return 0
  })

  return data
}

export const functions = {
  highScore,
}
