import Image from 'next/image';
import Link from 'next/link';
import { MainCardReitingTextGreen } from 'components/UI/Typography';
import { IFreelancer } from 'interfaces/freelancer';
import { FREELANCERS_PATH } from 'utils/constants/routes';
import FreelancersCardHeader from './FreelancersCardHeader';
import FreelancersCardFooter from './FreelancersCardFooter';
import {
  Container, Wrapper, DescriptionText, ContainerRaiting, BoxRaiting, MainCardReitingText,
  MainCardReitingTextSilver, BoxReviews,
} from './styles';

const FreelancersCard: React.FC<IFreelancer> = ({
  id,
  firstName,
  lastName,
  photoUrl,
  description,
  special,
  city,
}) => (
  <Link href={`${FREELANCERS_PATH}${id}`} passHref>
    <Container>
      <Wrapper>

        <FreelancersCardHeader
          userName={`${firstName} ${lastName}`}
          photoUrl={photoUrl}
          special={special}
        />

        <DescriptionText>
          {description}
        </DescriptionText>

        <ContainerRaiting>
          <BoxRaiting>
            <Image
              alt="starIcon"
              src="/icons/ratingIcon.svg"
              quality={100}
              width={24}
              height={24}
            />
            <MainCardReitingText>
              Рейтинг:
            </MainCardReitingText>
            <MainCardReitingTextSilver>{0}%</MainCardReitingTextSilver>
          </BoxRaiting>
          <BoxReviews>
            <Image
              alt="starIcon"
              src="/icons/rewievsIcon.svg"
              quality={100}
              width={20}
              height={20}
            />
            <MainCardReitingText>
              Отзывы:
            </MainCardReitingText>
            <MainCardReitingTextSilver>
              <MainCardReitingTextGreen>{0}</MainCardReitingTextGreen>
              <MainCardReitingTextSilver>/ 0</MainCardReitingTextSilver>
            </MainCardReitingTextSilver>
          </BoxReviews>
        </ContainerRaiting>

      </Wrapper>

      <FreelancersCardFooter
        location={city || 'Москва'}
        countOrders={0}
      />

    </Container>
  </Link>
);

export default FreelancersCard;
