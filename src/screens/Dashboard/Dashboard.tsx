import { Header } from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from '@tanstack/react-query'
import { QueryKeys } from '../../infra'
import { imdbService } from '../../services/imdb/imdbService'
import { Card } from '../../components/Card/Card'
import { functions } from '../../utils/functions'

interface TrendingProps {
  trends: 'all' | 'person' | 'movie' | 'tv'
}

export function Dashboard() {
  const queryClient = useQueryClient()
  const [trending, setTrending] = useState('all')
  const [page, setPage] = useState(1)

  const { isPending, error, data, isPlaceholderData } = useQuery({
    queryKey: [QueryKeys.TrendingList],
    queryFn: () => imdbService.getTrending(trending, page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 10,
  })

  useEffect(() => {
    if (
      !isPlaceholderData &&
      !!data &&
      !!data.total_pages &&
      data.total_pages > data.page
    ) {
      queryClient.prefetchQuery({
        queryKey: [QueryKeys.TrendingList],
        queryFn: () => imdbService.getTrending(trending, page),
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, queryClient, trending])

  function handleToNextPage() {
    if (
      !isPlaceholderData &&
      !!data?.total_pages &&
      data.total_pages > data.page
    ) {
      setPage((old) => old + 1)
    }
  }

  function handleToPreviousPage() {
    if (
      !isPlaceholderData &&
      !!data?.total_pages &&
      data.total_pages > data.page &&
      page > 1
    ) {
      setPage((old) => old - 1)
    }
  }

  if (isPending) return <p>Loading...</p>

  if (error) return <p>An error has occurred: {error.message}</p>

  return (
    <>
      <Header />
      <div className="h-full bg-[#141414] pt-[32px]">
        <div className="flex flex-wrap justify-center gap-8 pt-[68px]">
          {functions.highScore(data.results).map((result) => {
            return <Card data={result} key={result.id} />
          })}
        </div>

        <div className="flex justify-center gap-5 pb-11 pt-11">
          <button
            onClick={handleToPreviousPage}
            className="btn rounded-md border p-2 text-white"
          >
            Pagina anterior
          </button>

          <button
            className="btn rounded-md border p-2 text-white"
            onClick={handleToNextPage}
            disabled={
              isPlaceholderData ||
              (!!data.total_pages && data.total_pages <= data.page)
            }
          >
            Próxima pagina
          </button>
        </div>
      </div>
    </>
  )
}
