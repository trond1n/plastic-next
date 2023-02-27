import Banner from '@/components/Banner';
import FeedbackForm from '@/components/FeedbackForm';
import DoneProjects from '@/components/Vacuum/DoneProjects';
import Possibilities from '@/components/Vacuum/Possibilities';
import StagesLeft from '@/components/Vacuum/StagesLeft/StagesLeft';
import StagesRight from '@/components/Vacuum/StagesRight/StagesRight';

const Prototyping = () => {
  return (
    <div>
      <Banner
        title="Быстрое прототипирование на 3D принтере"
        description="Произведем готовое изделие или мастер-модель по технологиям SLA, PolyJet или FDM"
      />
      <Possibilities />
      <StagesLeft />
      <StagesRight />
      <StagesLeft />
      <StagesRight />
      <DoneProjects />

      <FeedbackForm />
    </div>
  );
};

export default Prototyping;
