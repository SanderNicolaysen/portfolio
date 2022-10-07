import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import firebaseConfig from './firebaseConfig';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Bio from './pages/Bio/Bio';
import Work from './pages/Work/Work';
import Layout from './components/Layout';
import Footer from './components/Footer';

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
