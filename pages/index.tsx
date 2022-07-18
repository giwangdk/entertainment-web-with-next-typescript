import { GetStaticProps } from 'next'
import CardMovie from '../components/CardMovie'
import Layout from '../components/Layout'
import Trending from '../components/Trending'
import { Movie } from '../interfaces'
import { getWithoutHeader } from '../utils/api'

const API_URL = process.env.IMDB_API_URL;
const API_KEY = process.env.IMDB_API_KEY;

function IndexPage({ comingSoon }: { comingSoon: Movie[] }) {
  return (
    <Layout>
      <Trending movies={comingSoon} />
      <CardMovie />
    </Layout>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const res = await getWithoutHeader(`${API_URL}/Top250TVs/${API_KEY}`);
  const comingSoon:Movie[] = await res.data.items;
  return {
    props: {
      comingSoon
    }
  }
}
export default IndexPage
