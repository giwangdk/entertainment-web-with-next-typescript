import { GetStaticProps } from 'next'
import CardMovie from '../components/CardMovie'
import Layout from '../components/Layout'
import Trending from '../components/Trending'
import { getComingSoon } from '../utils/imd'

function IndexPage({ comingSoon }) {
  console.log(comingSoon)
  return (
    <Layout>
      <Trending />
      <CardMovie />
    </Layout>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const res = await getComingSoon();
  const comingSoon = res.data.data;
  console.log(res)
  return {
    props: {
      comingSoon
    },
  }
}
export default IndexPage
