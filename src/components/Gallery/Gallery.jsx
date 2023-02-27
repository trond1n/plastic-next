import Image from 'next/image';
import styles from './Gallery.module.scss';
const Gallery = ({ data }) => {
  return (
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
  );
};

export default Gallery;
