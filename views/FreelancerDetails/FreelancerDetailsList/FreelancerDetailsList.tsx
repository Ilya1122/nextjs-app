import Image from 'next/image';
import {
  BoxItem, BoxItemLocations, Title, SubTitle, BoxText,
} from './styles';

const FreelancerDetailsList: React.FC = () => (
  <>
    <BoxItem>
      <Image
        alt="icon"
        src="/icons/settingsIconBlue.svg"
        quality={100}
        width={38}
        height={38}
      />
      <BoxText>
        <Title>Обучение и консультации</Title>
        <SubTitle>Специализация</SubTitle>
      </BoxText>
    </BoxItem>
    <BoxItemLocations>
      <Image
        alt="icon"
        src="/icons/locationIconBlue.svg"
        quality={100}
        width={38}
        height={38}
      />
      <BoxText>
        <Title>Москва</Title>
        <SubTitle>Местоположение</SubTitle>
      </BoxText>
    </BoxItemLocations>
    <BoxItem>
      <Image
        alt="icon"
        src="/icons/rewievIconBlue.svg"
        quality={100}
        width={38}
        height={38}
      />
      <BoxText>
        <Title>0/0</Title>
        <SubTitle>Отзывы</SubTitle>
      </BoxText>
    </BoxItem>
  </>
);

export default FreelancerDetailsList;
