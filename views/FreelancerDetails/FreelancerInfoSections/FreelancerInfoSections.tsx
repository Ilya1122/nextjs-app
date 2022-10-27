import FreelancersDetailsBlock from 'components/FreelancersDetailsBlock';
import FreelancerDetailsList from '../FreelancerDetailsList';
import {
  Container, WrapperBoxLeft, WrapperBoxRight,
  Wrapper,
} from './styles';

interface Props {
  freelancerId: number;
  photoUrl: string | null;
  firstName: string;
  lastName: string;
  description: string | null;
}

const FreelancerInfoSections: React.FC<Props> = ({
  photoUrl,
  firstName,
  lastName,
  description,
  freelancerId,
}) => (
  <Container>
    <Wrapper>

      <WrapperBoxLeft>
        <FreelancersDetailsBlock
          description={description}
          avatar={photoUrl || '/images/profilePhoto.svg'}
          name={`${firstName} ${lastName}`}
          id={freelancerId}
        />
      </WrapperBoxLeft>

      <WrapperBoxRight>
        <FreelancerDetailsList />
      </WrapperBoxRight>

    </Wrapper>
  </Container>
);

export default FreelancerInfoSections;
