import Home from './components/Home'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Home />
      {/* <div className="spacer home-background"></div> */}
      <Contact />
      <Footer />
    </Layout>
  )
}

export default App
