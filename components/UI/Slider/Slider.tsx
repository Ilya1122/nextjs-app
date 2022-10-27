import React, { useEffect, useState } from 'react';
import { SwiperOptions } from 'swiper';
import { Swiper } from 'swiper/react';

interface ISlider {
  swiperRef: HTMLHeadingElement
}

const Slider: React.FC<ISlider> = ({ children, swiperRef }) => {
  const [settings, setSettings] = useState<SwiperOptions | null>(null);

  useEffect(() => {
    setSettings({
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        550: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    settings && (
      <Swiper
        {...settings}
        className="swiperPortfolio"
        ref={swiperRef}
      >
        {children}
      </Swiper>
    )
  );
};

export default Slider;
