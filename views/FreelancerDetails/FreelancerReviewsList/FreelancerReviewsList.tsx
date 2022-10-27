import { SwiperSlide } from 'swiper/react';
import ReviewsCard from 'components/ReviewsCard';
import Slider from 'components/UI/Slider';
import { ICardReviews } from 'interfaces/index';

interface IFreelancerReviewsList {
  cardReviews: ICardReviews[],
  swiperRef: HTMLHeadingElement,
}

const FreelancerReviewsList: React.FC<IFreelancerReviewsList> = ({ cardReviews, swiperRef }) => (
  <Slider swiperRef={swiperRef}>
    {cardReviews.map((item) => (
      <SwiperSlide key={item.id}>
        <ReviewsCard {...item} />
      </SwiperSlide>
    ))}
  </Slider>
);

export default FreelancerReviewsList;
