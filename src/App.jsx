import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import Bio from './components/Bio';
import Work from './components/Work';

function App() {
  return (
    <>
      {/* <Particle /> */}
      <Layout>
        <Home />
        <Bio />
        <Work />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
