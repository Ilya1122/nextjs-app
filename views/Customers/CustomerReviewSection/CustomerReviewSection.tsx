import React, { useRef } from 'react';
import Image from 'next/image';
import CustomerReviewList from '../CustomerReviewList';
import { cardReviews } from '../constants';
import {
  Container, WrapperSlider, HeaderPortfolio, Title, ArrowBox,
  BoxArrovRight, BoxArrovLeft,
} from './styles';

interface ICustomerReviewSection {
  title: string,
}

const CustomerReviewSection: React.FC<ICustomerReviewSection> = ({ title }) => {
  const swiperRef = useRef<HTMLHeadingElement>(null);
  const onNexSlide = () => swiperRef.current.swiper.slideNext();
  const onPrevSlide = () => swiperRef.current.swiper.slidePrev();

  return (
    <Container>
      <WrapperSlider height={383}>
        <HeaderPortfolio>
          <Title>{title}</Title>
          <ArrowBox>
            <BoxArrovLeft onClick={onPrevSlide}>
              <Image
                src="/icons/arrovLeftIcon.svg"
                width={28}
                height={28}
                quality={100}
                alt="arrowIcon"
              />
            </BoxArrovLeft>
            <BoxArrovRight onClick={onNexSlide}>
              <Image
                src="/icons/arrovRightIcon.svg"
                width={28}
                height={28}
                quality={100}
                alt="arrowIcon"
              />
            </BoxArrovRight>
          </ArrowBox>
        </HeaderPortfolio>
        <CustomerReviewList cardReviews={cardReviews} swiperRef={swiperRef} />
      </WrapperSlider>
    </Container>
  );
};

export default CustomerReviewSection;
