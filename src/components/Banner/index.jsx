import Image from 'next/image';
import React from 'react';
import Button from '../UI/Button/Button';
import styles from './Banner.module.scss';

const items = [
  { id: 1, text: 'от 1 до 1000 штук', imgPath: 'ic1-1.png' },
  { id: 2, text: 'срок производства от 3 дней', imgPath: 'ic2-1.png' },
  { id: 3, text: 'цвета по каталогу RAL', imgPath: 'ic3-1.png' },
];
const Banner = ({ title, description }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <Image src={`/images/${item.imgPath}`} width={58} height={46} alt="иконка" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <Button title="Отправить заявку на расчет стоимости" />
      </div>
    </div>
  );
};

export default Banner;
