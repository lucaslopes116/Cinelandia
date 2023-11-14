import { Star } from '@phosphor-icons/react'
import { IMDBDetails } from '../../api/imdb/imdbAPIModels'

interface Props {
  data: IMDBDetails
}

export function Card({ data }: Props) {
  return (
    <div className="group relative">
      {data.vote_average >= 6 && (
        <Star
          size={24}
          color="#f7e522"
          weight="fill"
          className="absolute top-2 z-10 duration-150 group-hover:-translate-y-2"
        />
      )}
      <img
        className="rounded-t-rg h-[350px] w-[300px] cursor-pointer rounded-t-lg duration-150 group-hover:-translate-y-2 "
        src={`http://image.tmdb.org/t/p/original${data.poster_path}`}
        alt={data.original_title}
      />
    </div>
  )
}
