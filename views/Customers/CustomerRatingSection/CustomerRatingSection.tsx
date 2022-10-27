import { WrapperFixedRow } from 'components/Wrappers';
import RatingListBlock from 'components/RatingListBlock';
import { userRating } from '../constants';
import { Container } from './styles';

const CustomerRatingSection: React.FC = () => (
  <WrapperFixedRow spacesTop={40} spacesBootom={40}>
    <Container>
      <RatingListBlock
        maxwidthprogress={882}
        title="Рейтинг: 75%"
        userRating={userRating}
        maxWidth="100%"
        spacesRight="0"
      />
    </Container>
  </WrapperFixedRow>
);

export default CustomerRatingSection;
