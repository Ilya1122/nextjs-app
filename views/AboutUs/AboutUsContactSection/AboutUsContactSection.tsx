import Image from 'next/image';
import TitleBreadcrumbsBlock from 'components/TitleBreadcrumbsBlock';
import { TextDocument, InformationsText } from 'components/UI/Typography';
import AboutUsEmailsList from '../AboutUsEmailsList';
import AboutUsContactsList from '../AboutUsContactsList';
import {
  Container, ContainerFixed, BoxDesText, InfoBlock,
} from './styles';

const AboutUsContactSection = () => (
  <Container>
    <ContainerFixed>
      <BoxDesText>
        <TitleBreadcrumbsBlock nameActiveLink="Контакты" title="Контакты" marginTop={0} />
        <TextDocument marginTop={18}>
          Если у вас есть вопросы или сложности во время использования нашего сайта,
          пожалуйста, обратитсь в нашу команду поддержки
        </TextDocument>

        <AboutUsContactsList />

        <InfoBlock>
          <Image src="/icons/informationIcon.svg" width={16} height={16} quality={100} alt="iconInfo" />
          <InformationsText>
            Чем больше деталей о себе вы укажете при обращении (Ваше ФИО, название
            заказа, суть проблемы), тем быстрее и проще мы сможем вам помочь
          </InformationsText>
        </InfoBlock>
      </BoxDesText>
      <AboutUsEmailsList />
    </ContainerFixed>
  </Container>
);

export default AboutUsContactSection;
