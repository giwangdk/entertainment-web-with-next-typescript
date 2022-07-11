import Image from "next/image"
import Movie from '../../assets/medium.jpg' 
import { PlayButton } from "../Button"
import {MdLocalMovies} from "react-icons/md"

function CardMovie() {
  return (
      <div className=" relative max-w-[270px]">
          <div className="image-movie rounded-xl">
              <Image src={Movie} className="rounded-xl" width="270" height="180" />
          </div>
          <div className="movie-desc flex text-sm">
              <span className="text-gray-400 font-medium mr-3">2017</span>
              <span className="text-gray-400 font-medium mr-3 flex items-center"><MdLocalMovies /> Movie</span>
              <span className="text-gray-400 font-medium">PG</span>
          </div>
          <h6 className="text-white font-bold text-xl">Pegunungan</h6>
          <PlayButton className='absolute top-1/3 left-20 ' />
    </div>
  )
}

export default CardMovie