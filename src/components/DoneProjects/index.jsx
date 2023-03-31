import BlockTitle from '../UI/BlockTitle/BlockTitle';
import CarouselBox from '../UI/CarouselBox/CarouselBox';
import styles from './DoneProjects.module.scss';

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
