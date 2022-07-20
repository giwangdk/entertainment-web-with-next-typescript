import React from 'react'
import { Movie } from '../interfaces'
import CardMovie from './CardMovie'
import LayoutCollection from './LayoutCollection'

function MovieCollection({ movies }:{movies:Movie[]}) {
  console.log(movies)
  return (
    <LayoutCollection title="Movies">
      {
        (movies || []).slice(0, 5).map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))
      }
    </LayoutCollection>
  )
}

export default MovieCollection
