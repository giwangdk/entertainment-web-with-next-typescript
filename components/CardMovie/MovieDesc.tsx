import { MdLocalMovies } from 'react-icons/md'
import { Movie } from '../../interfaces'

function MovieDesc({ movie }: {movie: Movie}) {
  console.log(movie)
  return (
    <>
      <div className="movie-desc flex text-sm">
        <span className="text-gray-400 font-medium mr-3">{movie.year}</span>
        <span className="text-gray-400 font-medium mr-3 flex items-center">
          <MdLocalMovies />
          {' '}
          Movie
        </span>
        <span className="text-gray-400 font-medium">PG</span>
      </div>
      <h6 className="text-white font-bold text-xl">{movie.title}</h6>
    </>
  )
}

export default MovieDesc
