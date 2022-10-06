import { getAnalytics, logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Bio from './components/Bio';
import Work from './components/Work';

function App() {
  const analytics = getAnalytics();

  useEffect(() => {
    logEvent(analytics, 'homepage_visited');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Home />
      <Bio />
      <Work />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
