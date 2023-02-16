import Banner from '@/components/Banner';
import FeedbackForm from '@/components/FeedbackForm';
import DoneProjects from '@/components/Vacuum/DoneProjects';
import Possibilities from '@/components/Vacuum/Possibilities';

import StagesLeft from '@/components/Vacuum/StagesLeft/StagesLeft';
import StagesRight from '@/components/Vacuum/StagesRight/StagesRight';
import React from 'react';

const Vacuum = () => {
  return (
    <div>
      <Banner
        title="Литье пластика в силиконовые формы"
        description="Производство мелкосерийных партий по образцу или 3D-модели"
      />
      <Possibilities />
      <DoneProjects />
      <StagesLeft />
      <StagesRight />
      <StagesLeft />
      <StagesRight />
      <FeedbackForm />
    </div>
  );
};

export default Vacuum;
