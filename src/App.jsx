import Home from './components/Home'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Bio from './components/Bio'
import Work from './components/Work'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { useEffect } from 'react'

function App() {
  const analytics = getAnalytics()

  useEffect(() => {
    logEvent(analytics, 'homepage_visited')
  }, [])

  return (
    <>
      {/* <Particle /> */}
      <Layout>
        <Home />
        <Bio />
        <Work />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}

export default App
