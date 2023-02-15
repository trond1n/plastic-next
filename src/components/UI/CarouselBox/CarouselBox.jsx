import styles from './CarouselBox.module.scss';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
const data = [
  {
    id: 1,
    title: 'узи для лазертаг',
    image: '/images/slider/1.jpg',
  },
  {
    id: 2,
    title: 'КОРПУС ПРИБОРА',
    image: '/images/slider/2.jpg',
  },
  {
    id: 3,
    title: 'КОРПУС ПРИБОРА',
    image: '/images/slider/3.jpg',
  },
  {
    id: 4,
    title: 'МАКЕТ МЕТЕОРОЛОГИЧЕСКОГО ОБОРУДОВАНИЯ',
    image: '/images/slider/4.jpg',
  },
  {
    id: 5,
    title: 'USB-НАКЛАДКА',
    image: '/images/slider/5.jpg',
  },
];
const CarouselBox = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  const csl = [styles.card];

  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {data.map((i) => {
          return (
            <div key={i.id} className={styles.card}>
              <Image src={i.image} width={280} height={158} />
              <a>{i.title}</a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselBox;
