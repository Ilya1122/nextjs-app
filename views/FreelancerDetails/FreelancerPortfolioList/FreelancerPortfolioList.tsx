import { SwiperSlide } from 'swiper/react';
import { IPortfolioCard } from 'interfaces/index';
import Slider from 'components/UI/Slider';
import FreelancerPortfolioCard from '../FreelancerPortfolioCard';

interface IFreelancerPortfolioList {
  cardPortfolio: IPortfolioCard[],
  swiperRef: HTMLHeadingElement,
}

const FreelancerPortfolioList: React.FC<IFreelancerPortfolioList> = ({
  cardPortfolio, swiperRef,
}) => (
  <Slider swiperRef={swiperRef}>
    {cardPortfolio.map((item) => (
      <SwiperSlide key={item.id}>
        <FreelancerPortfolioCard {...item} />
      </SwiperSlide>
    ))}
  </Slider>
);

export default FreelancerPortfolioList;
