import CardMovie from '../components/CardMovie'
import Layout from '../components/Layout'
import Trending from '../components/Trending'

function IndexPage() {
  return (
    <Layout>
      <Trending />
      <CardMovie />
    </Layout>
  )
}

export default IndexPage
