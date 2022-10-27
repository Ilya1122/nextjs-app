import { WrapperFixedRow } from 'components/Wrappers';
import RatingListBlock from 'components/RatingListBlock';
import FreelancerAwardsList from '../FreelancerAwardsList';
import { userRating } from '../constants';
import { Container } from './styles';

const FreelancerRatingSections: React.FC = () => (
  <WrapperFixedRow spacesTop={40} spacesBootom={40}>
    <Container>
      <RatingListBlock title="Рейтинг: 75%" userRating={userRating} />
      <FreelancerAwardsList />
    </Container>
  </WrapperFixedRow>
);

export default FreelancerRatingSections;
