import Image from 'next/image';
import { userAwards } from '../constants';
import {
  Container, Title, ButtonAwards, WrapTitle, BoxIcon,
} from './styles';

interface IUserAwards {
  image: string,
  id: number,
  title: string,
  infoIcon: string,
}

const FreelancerAwardsList: React.FC = () => (
  <Container>
    <Title>Награды</Title>
    {userAwards.map(({
      image, id, title, infoIcon,
    }: IUserAwards) => (
      <ButtonAwards
        key={id}
        startIcon={(
          <Image src={image} width={29} height={29} alt="icon" />
        )}
        endIcon={(
          <BoxIcon>
            <Image src={infoIcon} width={10} height={10} alt="icon" />
          </BoxIcon>
        )}
      >
        <WrapTitle>{title}</WrapTitle>
      </ButtonAwards>
    ))}
  </Container>
);

export default FreelancerAwardsList;
