import Image from 'next/image';
import Link from 'next/link';
import {
  MainDefaultButton,
} from 'components/UI/Button';
import { PROJECTS_PATH } from 'utils/constants/routes';
import {
  Container, ContainerTitle, Title, ContainerButton, IconBoxBlue, IconBoxYellow, IconBoxPink,
  BlueButton, YellowButton, PinkButton,
} from './styles';

const MainCategoryListButton = () => (
  <Container>
    <ContainerTitle>
      <Title>Популярные категории</Title>
      <Link href={PROJECTS_PATH} passHref>
        <MainDefaultButton
          endIcon={<Image src="/icons/arrorwRedIcon.svg" width={21} height={21} quality={100} alt="arrow" />}
        >
          Все категории
        </MainDefaultButton>
      </Link>
    </ContainerTitle>
    <ContainerButton>
      <BlueButton
        endIcon={(
          <IconBoxBlue>
            <Image src="/icons/iconRight.svg" width={21} height={21} quality={100} alt="arrow" />
          </IconBoxBlue>
        )}
      >
        Разработка сайтов
      </BlueButton>
      <YellowButton
        endIcon={(
          <IconBoxYellow>
            <Image src="/icons/iconRight.svg" width={21} height={21} quality={100} alt="arrow" />
          </IconBoxYellow>
        )}
      >
        Тексты
      </YellowButton>
      <PinkButton
        endIcon={(
          <IconBoxPink>
            <Image src="/icons/iconRight.svg" width={21} height={21} quality={100} alt="arrow" />
          </IconBoxPink>
        )}
      >
        Дизайн и Арт
      </PinkButton>
    </ContainerButton>
  </Container>
);

export default MainCategoryListButton;
