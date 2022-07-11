import Image from "next/image"
import Movie from '../../assets/medium.jpg' 
import { PlayButton } from "../Button"
import { useState } from "react"
import styles from './index.module.css'
import MovieDesc from "./MovieDesc"

function CardMovie() {
  const [show, setShow] = useState(false)

  const ImageMouseOverHandler = () => { 
    setShow(true)
  }

  
  const ImageMouseOutHandler = () => { 
    setShow(false)
  }
  return (
      <div className=" relative max-w-[270px]" >
          <div className={`${styles.image_movie} rounded-xl `} onMouseOver={ImageMouseOverHandler} onMouseLeave={ImageMouseOutHandler}>
        <Image src={Movie} className="rounded-xl" width="270" height="180" />
        
        <PlayButton show={show} className={`${styles.play_button} absolute top-1/3 left-20 transition-all ease-in delay-150 hover:scale-110 duration-200 `} />
          </div>
          <MovieDesc  />
    </div>
  )
}

export default CardMovie