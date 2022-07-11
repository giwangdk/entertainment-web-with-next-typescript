import {MdLocalMovies} from "react-icons/md"

function MovieDesc() {
  return (
      <>
          <div className="movie-desc flex text-sm">
              <span className="text-gray-400 font-medium mr-3">2017</span>
              <span className="text-gray-400 font-medium mr-3 flex items-center"><MdLocalMovies /> Movie</span>
              <span className="text-gray-400 font-medium">PG</span>
          </div>
          <h6 className="text-white font-bold text-xl">Pegunungan</h6>
    </>
  )
}

export default MovieDesc