import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutMetrics from '../components/about/AboutMetrics';
import AboutStory from '../components/about/AboutStory';
import AboutRecognition from '../components/about/AboutRecognition';
import AboutFounder from '../components/about/AboutFounder';
import AboutWhy from '../components/about/AboutWhy';

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <AboutHero />
      <AboutMetrics />
      <AboutStory />
      <AboutRecognition />
      <AboutFounder />
      <AboutWhy />
    </div>
  );
};

export default AboutPage;
