import AboutUsCustomersList from '../AboutUsCustomersList';
import { IItemPlatform } from '../interface';
import {
  Container, ContainerFixed, TitlePlatform, RigtBox, Image, ImageMobile,
} from './styles';

interface IAboutUsPlatformAdvantages {
  background?: string,
  title: string,
  reverse?: string,
  widthitemtext?: number,
  platformCustomers: IItemPlatform[],
  image: string,
  imageMobile: string,
}

const AboutUsPlatformAdvantages: React.FC<IAboutUsPlatformAdvantages> = ({
  platformCustomers, background, title, reverse, widthitemtext, image, imageMobile,
}) => (
  <Container background={background}>
    <ContainerFixed reverse={reverse}>
      <Image src={image} alt="image" />
      <ImageMobile src={imageMobile} alt="image" />
      <RigtBox reverse={reverse}>
        <TitlePlatform>{title}</TitlePlatform>
        <AboutUsCustomersList platformCustomers={platformCustomers} widthitemtext={widthitemtext} />
      </RigtBox>
    </ContainerFixed>
  </Container>
);

export default AboutUsPlatformAdvantages;
