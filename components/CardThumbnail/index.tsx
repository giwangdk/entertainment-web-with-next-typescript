import Image from "next/image"
import { useState } from "react"
import Movie from '../../assets/medium.jpg' 
import { PlayButton } from "../Button"
import MovieDesc from "../CardMovie/MovieDesc"

function CardThumbnail() {
  const [show, setShow] = useState(false)

  const ImageMouseOverHandler = () => { 
    setShow(true)
  }

  
  const ImageMouseOutHandler = () => { 
    setShow(false)
  }

  return (
      <div className=" relative max-w-[470px]" >
          <div className="rounded-xl" onMouseOver={ImageMouseOverHandler} onMouseLeave={ImageMouseOutHandler}>
          <Image src={Movie} className="rounded-xl object-fit" width="470" height="230" />
          <PlayButton show={show} className= "absolute top-1/3 left-1/3 transition-all ease-in delay-150 hover:scale-110 duration-200" />
          </div>
          <div className="desc absolute z-40 bottom-5 left-5 text-white">
          <MovieDesc  />
          </div>
    </div>
  )
}

export default CardThumbnail