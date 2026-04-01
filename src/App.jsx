import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutRecognition from './components/about/AboutRecognition';
import TrustSection from './components/TrustSection';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FranchisePage from './pages/FranchisePage';
import ContactPage from './pages/ContactPage';
import PackagePage from './pages/PackagePage';
import PackageDetailPage from './pages/PackageDetailPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-jadko-primary/10 selection:text-jadko-primary">
      <style>{`
        .container, .jadko-container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        @media (min-width: 640px) { 
          .container, .jadko-container { max-width: 640px; } 
        }
        @media (min-width: 768px) { 
          .container, .jadko-container { max-width: 768px; } 
        }
        @media (min-width: 1024px) { 
          .container, .jadko-container { max-width: 1024px; } 
        }
        @media (min-width: 1280px) { 
          .container, .jadko-container { max-width: 1200px; } 
        }
      `}</style>
      <ScrollToTop />
      <Header />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919033608708"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="white" className="shrink-0">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.473 2.027 7.774L0 32l8.466-2.003A15.929 15.929 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.25a13.21 13.21 0 0 1-6.733-1.838l-.483-.286-4.99 1.18 1.245-4.842-.314-.497A13.19 13.19 0 0 1 2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25zm7.27-9.874c-.398-.199-2.353-1.16-2.718-1.293-.365-.132-.631-.199-.897.2-.265.398-1.028 1.293-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.981-2.36-2.213-2.759-.232-.398-.025-.613.174-.811.18-.178.398-.464.597-.697.199-.232.265-.398.398-.664.132-.265.066-.498-.033-.697-.1-.199-.897-2.162-1.228-2.96-.324-.778-.652-.672-.897-.684l-.764-.013c-.265 0-.696.1-1.061.498-.365.398-1.394 1.36-1.394 3.316 0 1.956 1.427 3.846 1.626 4.112.199.265 2.808 4.286 6.805 6.01.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.353-.961 2.685-1.889.332-.928.332-1.724.232-1.889-.1-.165-.365-.265-.763-.464z"/>
        </svg>
        <span className="text-white text-sm font-semibold whitespace-nowrap">Talk to us</span>
      </a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/packages" element={<PackagePage />} />
        <Route path="/packages/:id" element={<PackageDetailPage />} />
      </Routes>
      <AboutRecognition />
      <TrustSection />
      <Footer />
    </div>
  )
}

export default App;