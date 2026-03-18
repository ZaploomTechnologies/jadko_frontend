import HeroSlider from '../components/HeroSlider';
import HealthCheckups from '../components/HealthCheckups';
import WhyChooseUs from '../components/WhyChooseUs';
import StepsSection from '../components/StepsSection';
import MobileApp from '../components/MobileApp';
import AboutSection from '../components/AboutSection';
import TrustSection from '../components/TrustSection';

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <HealthCheckups />
      <WhyChooseUs />
      <StepsSection />
      <MobileApp />
      <AboutSection />
      <TrustSection />
    </main>
  );
};

export default Home;
