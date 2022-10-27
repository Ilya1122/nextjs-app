import React, { useRef } from 'react';
import Image from 'next/image';
import FreelancerPortfolioList from '../FreelancerPortfolioList';
import FreelancerReviewsList from '../FreelancerReviewsList';
import { cardPortfolio, cardReviews } from '../constants';
import {
  Container, WrapperSlider, HeaderPortfolio, Title, ArrowBox,
  BoxArrovRight, BoxArrovLeft,
} from './styles';

interface IFreelancerPortfolioSections {
  title: string,
  height?: number,
  isReviewsList?: boolean,
}

const FreelancerPortfolioSections: React.FC<IFreelancerPortfolioSections> = ({
  title, height, isReviewsList,
}) => {
  const swiperRef = useRef<HTMLHeadingElement>(null);
  const onNexSlide = () => swiperRef.current.swiper.slideNext();
  const onPrevSlide = () => swiperRef.current.swiper.slidePrev();

  return (
    <Container>
      <WrapperSlider height={height}>
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

        {isReviewsList ? (
          <FreelancerReviewsList swiperRef={swiperRef} cardReviews={cardReviews} />
        ) : (
          <FreelancerPortfolioList swiperRef={swiperRef} cardPortfolio={cardPortfolio} />
        )}

      </WrapperSlider>
    </Container>
  );
};

export default FreelancerPortfolioSections;
