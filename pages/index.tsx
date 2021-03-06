import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import MovieCollection from '../components/MovieCollection'
import Trending from '../components/Trending'
import { Movie } from '../interfaces'
import { getWithoutHeader } from '../utils/api'

const API_URL = process.env.IMDB_API_URL;
const API_KEY = process.env.IMDB_API_KEY;

function IndexPage({ comingSoon, movies }: { comingSoon: Movie[], movies: Movie[] }) {
  return (
    <Layout>
      <Trending movies={comingSoon} />
      <MovieCollection movies={movies} />
    </Layout>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const res = await getWithoutHeader(`${API_URL}/ComingSoon/${API_KEY}`);
  const resMovie = await getWithoutHeader(`${API_URL}/Top250Movies/${API_KEY}`);
  console.log(resMovie)
  const comingSoon:Movie[] = await res.data.items;
  const movies:Movie[] = await resMovie.data.items;
  return {
    props: {
      comingSoon,
      movies
    }
  }
}
export default IndexPage
