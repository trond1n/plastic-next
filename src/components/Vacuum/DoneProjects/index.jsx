import BlockTitle from '@/components/UI/BlockTitle/BlockTitle';
import Image from 'next/image';
import styles from './DoneProjects.module.scss';

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

const DoneProjects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <BlockTitle title="Выполненные проекты" />
        <div className={styles.blocks}>
          {data.map((i) => {
            return (
              <div key={i.id} className={styles.card}>
                <Image src={i.image} width={292} height={275} alt="done project" />
                <div className={styles.text}>
                  <a>{i.title}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoneProjects;
