import FeedbackForm from '@/components/FeedbackForm';
import Gallery from '@/components/Gallery/Gallery';
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle';
import React from 'react';

const data = [
  {
    id: 1,
    title: 'Узи для лазертаг',
    image: '/images/projects/1.jpg',
  },
  {
    id: 2,
    title: 'Корпус складского WI-FI роутера',
    image: '/images/projects/2.jpg',
  },
  {
    id: 3,
    title: 'Корпус сигнализации',
    image: '/images/projects/3.jpg',
  },
  {
    id: 4,
    title: 'USB-накладка',
    image: '/images/projects/4.png',
  },
  {
    id: 5,
    title: 'Лицевая панель прибора',
    image: '/images/projects/5.jpg',
  },
  {
    id: 6,
    title: 'Стекло габаритного огня',
    image: '/images/projects/6.jpg',
  },
  {
    id: 7,
    title: 'Защитное стекло бортового компьютера Subaru',
    image: '/images/projects/7.jpg',
  },
  {
    id: 8,
    title: 'Макет метеорологического оборудования',
    image: '/images/projects/8.jpg',
  },
];
const Done = () => {
  return (
    <div>
      <div style={{ maxWidth: '80%', margin: '0 auto', padding: '40px 0' }}>
        <BlockTitle title="ВЫПОЛНЕННЫЕ РАБОТЫ" />
        <Gallery data={data} />
      </div>
      <FeedbackForm />
    </div>
  );
};

export default Done;
