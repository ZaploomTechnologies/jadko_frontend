import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FranchisePage from './pages/FranchisePage';
import ContactPage from './pages/ContactPage';

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;