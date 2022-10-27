import { SwiperSlide } from 'swiper/react';
import Slider from 'components/UI/Slider';
import ReviewsCard from 'components/ReviewsCard';
import { ICardReviews } from 'interfaces/index';

interface ICustomerReviewList {
  cardReviews: ICardReviews[],
  swiperRef: HTMLHeadingElement,
}

const CustomerReviewList: React.FC<ICustomerReviewList> = ({ cardReviews, swiperRef }) => (
  <Slider swiperRef={swiperRef}>
    {cardReviews.map((item) => (
      <SwiperSlide key={item.id}>
        <ReviewsCard {...item} />
      </SwiperSlide>
    ))}
  </Slider>
);

export default CustomerReviewList;
