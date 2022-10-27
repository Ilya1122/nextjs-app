import Image from 'next/image';
import { MainTitlePlatfotm } from 'components/UI/Typography';
import { MainPlatformButton } from 'components/UI/Button';
import MainPlatformList from '../MainPlatformList';
import {
  ContainerPlatform, WrapperPlatform, BoxPlatform, IconBoxBlue, ImageBox, ImageMobile,
} from './styles';

const MainPlatformSection = () => (
  <ContainerPlatform>
    <WrapperPlatform>
      <ImageBox>
        <Image src="/icons/MainImgPlatform.svg" width={500} height={534} quality={100} alt="ImgPlatform" />
      </ImageBox>
      <ImageMobile src="/images/ImagePlatformMain.svg" />
      <BoxPlatform>
        <MainTitlePlatfotm>Преимущества платформы</MainTitlePlatfotm>
        <MainPlatformList />
        <MainPlatformButton
          endIcon={(
            <IconBoxBlue>
              <Image src="/icons/iconPlus.svg" width={16} height={16} quality={100} alt="plusIcon" />
            </IconBoxBlue>
          )}
        >
          Разместить заказ
        </MainPlatformButton>
      </BoxPlatform>
    </WrapperPlatform>
  </ContainerPlatform>
);

export default MainPlatformSection;
