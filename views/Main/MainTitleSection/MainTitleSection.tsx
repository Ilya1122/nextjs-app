import Image from 'next/image';
import { MainRedButton, MainDarkButton } from 'components/UI/Button';
import {
  Container, Title, SubTitle, ButtonContainer, IconBoxRed, ContainerSlideSite,
} from './styles';
import MainCategoryListButton from '../MainCategoryListButton';
import MainSiteList from '../MainSiteList';

const MainTitleSection = () => (
  <Container>
    <Title>
      Фриланс платформа с точным подсчетом рейтинга
    </Title>
    <SubTitle>
      Тысячи квалифицированных специалистов готовы поработать над вашим проектом
    </SubTitle>

    <ButtonContainer>
      <MainRedButton
        endIcon={(
          <IconBoxRed>
            <Image src="/icons/iconPlus.svg" width={16} height={16} quality={100} alt="plusIcon" />
          </IconBoxRed>
        )}
      >
        Разместить заказ
      </MainRedButton>
      <MainDarkButton>
        Я - исполнитель
      </MainDarkButton>
    </ButtonContainer>
    <MainCategoryListButton />
    <ContainerSlideSite>
      <MainSiteList />
    </ContainerSlideSite>
  </Container>
);

export default MainTitleSection;
