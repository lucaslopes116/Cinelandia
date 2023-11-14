export interface IMDBDetails {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Trending {
  page: number
  results: IMDBDetails[]
  total_pages?: number
  total_results?: number
}

export interface Page<Data> {
  page: number
  total_pages?: number
  total_results?: number
  data: Data[]
}
