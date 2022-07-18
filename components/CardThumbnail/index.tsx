import Image from 'next/image'
import { Movie } from '../../interfaces'
import MovieDesc from '../CardMovie/MovieDesc'

function CardThumbnail({ movie }: {movie: Movie}) {
  return (
    <div className=" relative">
      <div className="rounded-xl">
        <Image src={movie.image} className="rounded-xl object-cover object-bottom" width="440" height="260" />
      </div>
      <div className="desc absolute z-40 bottom-5 left-5 text-white">
        <MovieDesc movie={movie} />
      </div>

      <div
        className="flex justify-center items-center rounded-xl  bg-gradient-to-t
          from-gray-800 via-gray-800 to-opacity-30 opacity-50 absolute bottom-1.5 left-0 h-1/2 w-full"
      />
    </div>
  )
}

export default CardThumbnail
