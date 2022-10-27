import Progress from 'components/UI/Progress';
import {
  Container, Title, BoxRating, TitleProgress, TextPercent,
} from './styles';

interface IUserRating {
  nameRating: string,
  id: number,
  rating: number,
}

interface IRatingListBlock {
  title: string,
  userRating: IUserRating[]
  maxWidth?: string,
  maxwidthprogress?: number,
  spacesRight?: string,
}

const RatingListBlock: React.FC<IRatingListBlock> = ({
  title, userRating, maxWidth, maxwidthprogress, spacesRight,
}) => (
  <Container maxWidth={maxWidth} spacesRight={spacesRight}>
    <Title>{title}</Title>
    {userRating.map(({ nameRating, id, rating }) => (
      <BoxRating key={id}>
        <Progress value={rating} maxwidthprogress={maxwidthprogress} />
        <TitleProgress>
          {nameRating}: <TextPercent>{rating}%</TextPercent>
        </TitleProgress>
      </BoxRating>
    ))}
  </Container>
);

export default RatingListBlock;
