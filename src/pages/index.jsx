import About from '@/components/About';
import Banner from '@/components/Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Banner />
      <About />
    </div>
  );
};
export default Home;
