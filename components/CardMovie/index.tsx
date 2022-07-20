import Image from 'next/image';
import { Movie } from '../../interfaces';
import { PlayButton } from '../Button'
import styles from './index.module.css'
import MovieDesc from './MovieDesc';

function CardMovie({ movie }:{movie:Movie}) {
  return (
    <div className=" max-w-[270px]">
      <div className={`${styles.image_movie} group relative max-h-[180px] rounded-xl `}>
        <Image src={movie.image} className="rounded-xl object-cover object-bottom shadow-xl hover:shadow-2xl" width="270" height="180" />
        <div
          className="flex justify-center items-center rounded-xl opacity-0 bg-gradient-to-t
          from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"
        />
        <PlayButton className={`${styles.play_button} absolute top-20 left-20 transition-all ease-in delay-150 
        hover:scale-110 duration-50 opacity-0 group-hover:opacity-100 `}
        />
      </div>
      <MovieDesc movie={movie} />
    </div>
  )
}

export default CardMovie
