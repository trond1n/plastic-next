import styles from './CarouselBox.module.scss';
import React, { useState } from 'react';
import Slider from 'react-slick';

import Image from 'next/image';

const CarouselBox = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.item}>
          <div className={styles.info}>
            <h3>Узи для лазертага</h3>
            <button>Подробнее</button>
          </div>
          <Image src="/images/slider/1.jpg" width={341} height={192} alt="pic" />
        </div>
        <div className={styles.item}>
          <div className={styles.info}>
            <h3>Узи для лазертага</h3>
            <button>Подробнее</button>
          </div>
          <Image src="/images/slider/1.jpg" width={341} height={192} alt="pic" />
        </div>
        <div className={styles.item}>
          <div className={styles.info}>
            <h3>Узи для лазертага</h3>
            <button>Подробнее</button>
          </div>
          <Image src="/images/slider/1.jpg" width={341} height={192} alt="pic" />
        </div>
        <div className={styles.item}>
          <div className={styles.info}>
            <h3>Узи для лазертага</h3>
            <button>Подробнее</button>
          </div>
          <Image src="/images/slider/1.jpg" width={341} height={192} alt="pic" />
        </div>
        <div className={styles.item}>
          <div className={styles.info}>
            <h3>Узи для лазертага</h3>
            <button>Подробнее</button>
          </div>
          <Image src="/images/slider/1.jpg" width={341} height={192} alt="pic" />
        </div>
        <div className={styles.item}>
          <div className={styles.info}>
            <h3>Узи для лазертага</h3>
            <button>Подробнее</button>
          </div>
          <Image src="/images/slider/1.jpg" width={341} height={192} alt="pic" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselBox;
