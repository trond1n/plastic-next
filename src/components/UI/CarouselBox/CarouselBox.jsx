import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import Image from 'next/image';

const CarouselBox = () => {
  return (
    <Swiper
      loop={true}
      direction={'vertical'}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        el: '.pagination',
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="blog-slider">
      <SwiperSlide className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <Image src="/images/slider/stvol.jpg" alt="pushka" width={300} height={300} />
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2022</span>
          <div className="blog-slider__title">Узи для лазертага</div>
          <div className="blog-slider__text">Печать УЗИ для лазертага</div>
          <a href="#" className="blog-slider__button">
            ПОДРОБНЕЕ
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <Image src="/images/slider/stvol.jpg" alt="pushka" width={300} height={300} />
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">27 December 2022</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor</div>
          <div className="blog-slider__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate
            repellendus magni illo ea animi?
          </div>
          <a href="#" className="blog-slider__button">
            ПОДРОБНЕЕ
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <Image src="/images/slider/stvol.jpg" alt="pushka" width={300} height={300} />
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">28 December 2022</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor</div>
          <div className="blog-slider__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate
            repellendus magni illo ea animi?
          </div>
          <a href="#" className="blog-slider__button">
            ПОДРОБНЕЕ
          </a>
        </div>
      </SwiperSlide>

      <div className="pagination"></div>
    </Swiper>
  );
};

export default CarouselBox;
