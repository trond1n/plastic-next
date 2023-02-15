import Image from 'next/image';
import styles from '../styles/DoneProjects.module.scss';
import BlockTitle from './UI/BlockTitle/BlockTitle';
import CarouselBox from './UI/CarouselBox/CarouselBox';

const DoneProjects = () => {
  return (
    <div className={styles.done_projects}>
      <div className={styles.container}>
        <BlockTitle title="Выполненные нами проекты" />
        <CarouselBox />
      </div>
    </div>
  );
};

export default DoneProjects;
