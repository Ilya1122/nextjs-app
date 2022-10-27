import Image from 'next/image';
import { ICardReviews } from 'interfaces/index';
import {
  Container, HeaderCard, UserInfoText, NameUser, EstimateBlock, EstimateText,
  TextReview, IconImage,
} from './styles';

const ReviewsCard: React.FC<ICardReviews> = ({
  userName, img, coment, raiting,
}) => (
  <Container>
    <HeaderCard>

      <Image src={img} width={70} height={70} alt="avatat" />

      <UserInfoText>
        <NameUser>
          {userName}
        </NameUser>
        <EstimateBlock>
          <IconImage
            alt="icon"
            src="/icons/ratingIcon.svg"
          />
          <EstimateText>
            Оценка:
          </EstimateText>
          <TextReview>
            {raiting}%
          </TextReview>
        </EstimateBlock>
      </UserInfoText>
    </HeaderCard>

    <TextReview>
      {coment}
    </TextReview>

  </Container>
);

export default ReviewsCard;
