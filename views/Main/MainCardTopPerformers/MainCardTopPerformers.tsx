import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FREELANCERS_PATH } from 'utils/constants/routes';
import { IBestFreelancer } from 'interfaces/best-freelancer';
import {
  MainTitleCard, MainSubTitleCard, MainSubTitleCardBlack, MainCardDescription,
  MainCardReitingTextGreen,
} from 'components/UI/Typography';
import { MainCardBlueButton } from 'components/UI/Button';
import {
  ContainerItem, HeaderCard, BoxUserName, BoxText, BoxUser,
  ContainerRaiting, BoxRaiting, BoxReviews, MainCardReitingText, MainCardReitingTextSilver,
} from './styles';

interface Props {
  freelancer: IBestFreelancer;
}

const MainCardTopPerformers: React.FC<Props> = ({ freelancer }) => (
  <Link href={`${FREELANCERS_PATH}${freelancer.id}`} passHref>
    <ContainerItem>
      <HeaderCard>
        <BoxUser>
          <Image
            alt="avatar"
            src={freelancer.photoUrl || '/images/defaultPhoto.svg'}
            quality={100}
            width={61}
            height={61}
          />
          <BoxUserName>
            <MainTitleCard>
              {freelancer.firstName}{' '}{freelancer.lastName}
            </MainTitleCard>
            <BoxText>
              <MainSubTitleCard>Специализация:</MainSubTitleCard>
              <MainSubTitleCardBlack>{freelancer.special}</MainSubTitleCardBlack>
            </BoxText>
          </BoxUserName>
        </BoxUser>
      </HeaderCard>

      <MainCardDescription>{freelancer.description}</MainCardDescription>

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
          <MainCardReitingTextSilver>75%</MainCardReitingTextSilver>
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
            <MainCardReitingTextGreen>7</MainCardReitingTextGreen>
            <MainCardReitingTextSilver>/ 0</MainCardReitingTextSilver>
          </MainCardReitingTextSilver>
        </BoxReviews>
      </ContainerRaiting>

      <MainCardBlueButton>Обсудить условия сотрудничества</MainCardBlueButton>
    </ContainerItem>
  </Link>
);

export default MainCardTopPerformers;
