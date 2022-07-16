import Image from 'next/image'
import Movie from '../../assets/medium.jpg'
import MovieDesc from '../CardMovie/MovieDesc'

function CardThumbnail() {
  return (
    <div className=" relative ">
      <div className="rounded-xl">
        <Image src={Movie} className="rounded-xl object-fit" width="600" height="330" />
      </div>
      <div className="desc absolute z-40 bottom-5 left-5 text-white">
        <MovieDesc />
      </div>
    </div>
  )
}

export default CardThumbnail
