import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import firebaseConfig from './firebaseConfig';
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Bio from './components/Bio';
import Work from './components/Work';

function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  useEffect(() => {
    logEvent(analytics, 'app_visited');
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
