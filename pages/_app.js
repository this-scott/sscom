import '../styles/globals.css'
import Layout from '../components/layout'
//global css

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
