import Services from '@/components/Services';
import About from '@/components/About';
import DoneProjects from '@/components/DoneProjects';
import Banner from '@/components/Banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contacts from './contacts';

const Home = () => {
  return (
    <div>
      <Banner
        title="Мелкосерийное литье изделий из пластика"
        description="Производство деталей методом вакуумного
литья в силиконовые формы по образцу
или 3D-модели"
      />
      <Services />
      <About />
      <DoneProjects />
      <Contacts />
    </div>
  );
};
export default Home;
