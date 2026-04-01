import HeroSlider from '../components/HeroSlider';
import HealthCheckups from '../components/HealthCheckups';
import WhyChooseUs from '../components/WhyChooseUs';
import StepsSection from '../components/StepsSection';
import MobileApp from '../components/MobileApp';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <HealthCheckups />
      <WhyChooseUs />
      <StepsSection />
      <MobileApp />
      <AboutSection />
    </main>
  );
};

export default Home;
