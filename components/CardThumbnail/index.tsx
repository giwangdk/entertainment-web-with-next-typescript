import Image from 'next/image'
import MovieImg from '../../assets/medium.jpg'
import { Movie } from '../../interfaces'
import MovieDesc from '../CardMovie/MovieDesc'

function CardThumbnail({ movie }: {movie: Movie}) {
  return (
    <div className=" relative ">
      <div className="rounded-xl">
        <Image src={movie.image} className="rounded-xl object-fit" width="600" height="330" />
      </div>
      <div className="desc absolute z-40 bottom-5 left-5 text-white">
        <MovieDesc movie={movie} />
      </div>
    </div>
  )
}

export default CardThumbnail
