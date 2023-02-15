import styles from './CarouselBox.module.scss';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const data = [
  {
    id: 1,
    title: 'узи для лазертаг',
    image: 'https://ortoplast.ru/wp-content/uploads/2019/04/foto1.jpg',
  },
  {
    id: 2,
    title: 'КОРПУС ПРИБОРА',
    image: 'https://ortoplast.ru/wp-content/uploads/2019/04/korpus-1.jpg',
  },
  {
    id: 3,
    title: 'КОРПУС ПРИБОРА',
    image: 'https://ortoplast.ru/wp-content/uploads/2019/04/foto2.jpg',
  },
  {
    id: 4,
    title: 'МАКЕТ МЕТЕОРОЛОГИЧЕСКОГО ОБОРУДОВАНИЯ',
    image: 'https://ortoplast.ru/wp-content/uploads/2019/04/foto3.jpg',
  },
  {
    id: 5,
    title: 'USB-НАКЛАДКА',
    image: 'https://ortoplast.ru/wp-content/uploads/2019/04/USBGLAV-1.jpg',
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
              <img src={i.image} />
              <a>{i.title}</a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselBox;
