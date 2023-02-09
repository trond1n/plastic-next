import Image from 'next/image';
import React from 'react';
import styles from '../styles/Banner.module.scss';
import Button from './UI/Button/Button';
const items = [
  { id: 1, text: 'от 1 до 1000 штук', imgPath: 'ic1-1.png' },
  { id: 2, text: 'срок производства от 3 дней', imgPath: 'ic2-1.png' },
  { id: 3, text: 'цвета по каталогу RAL', imgPath: 'ic3-1.png' },
];
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h2>Мелкосерийное литье изделий из пластика</h2>
        <p>
          Производство деталей методом вакуумного литья в силиконовые формы по образцу или 3D-модели
        </p>
        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <Image src={`/images/${item.imgPath}`} width={58} height={46} />
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
