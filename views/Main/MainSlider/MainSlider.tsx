import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideItem from './SlideItem';
import { dataSlide } from '../constants';
import { ContainerSlider, BoxArrovRightIcon, BoxArrovLefttIcon } from './styles';

const MainSlider = () => {
  const [settings, setSettings] = useState<SwiperOptions | null>(null);
  const swiperRef = useRef();

  const onNexSlide = () => swiperRef.current.swiper.slideNext();
  const onPrevSlide = () => swiperRef.current.swiper.slidePrev();

  useEffect(() => {
    setSettings({
      centeredSlides: true,
      loop: true,
      autoplay: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        550: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: true,
    });
  }, []);

  return (
    <ContainerSlider>
      {settings && (
        <Swiper
          {...settings}
          className="mySwiper"
          ref={swiperRef}
        >
          {dataSlide.map((item) => (
            <SwiperSlide key={item.id}>
              <SlideItem item={item} />
            </SwiperSlide>
          ))}
          <BoxArrovLefttIcon id="nextButton" onClick={onPrevSlide}>
            <Image
              src="/icons/arrovLeftIcon.svg"
              width={34}
              height={34}
              quality={100}
              alt="arrowIcon"
            />
          </BoxArrovLefttIcon>
          <BoxArrovRightIcon id="previousButton" onClick={onNexSlide}>
            <Image
              src="/icons/arrovRightIcon.svg"
              width={34}
              height={34}
              quality={100}
              alt="arrowIcon"
            />
          </BoxArrovRightIcon>
        </Swiper>
      )}
    </ContainerSlider>
  );
};

export default MainSlider;
