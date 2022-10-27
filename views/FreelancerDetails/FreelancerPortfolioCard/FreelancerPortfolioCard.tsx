import Image from 'next/image';
import { IPortfolioCard } from 'interfaces/index';
import {
  Container, BoxTitle, Title, BoxCount, CountText, TextDescription,
} from './styles';

const FreelancerPortfolioCard: React.FC<IPortfolioCard> = ({
  title, image, count, text,
}) => (
  <Container>
    <Image src={image} width={351} height={265} alt="portfolio" />
    <BoxTitle>
      <Title>{title}</Title>
      <BoxCount>
        <CountText>{count}</CountText>
        <Image src="/icons/eyeIcon.svg" width={24} height={24} />
      </BoxCount>
    </BoxTitle>
    <TextDescription>
      {text}
    </TextDescription>
  </Container>
);

export default FreelancerPortfolioCard;
