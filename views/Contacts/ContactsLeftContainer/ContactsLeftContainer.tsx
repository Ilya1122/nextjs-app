import Image from 'next/image';
import TitleBreadcrumbsBlock from 'components/TitleBreadcrumbsBlock';
import { TextDocument, InformationsText } from 'components/UI/Typography';
import ContactsList from '../ContactsList';
import { Container, InfoBlock } from './styles';

const ContactsLeftContainer: React.FC = () => (
  <Container>
    <TitleBreadcrumbsBlock isLink nameActiveLink="Контакты" title="Контакты" marginTop={24} />

    <TextDocument marginTop={18}>
      Если у вас есть вопросы или сложности во время использования нашего сайта,
      пожалуйста, обратитсь в нашу команду поддержки
    </TextDocument>

    <ContactsList />

    <InfoBlock>
      <Image src="/icons/informationIcon.svg" width={16} height={16} quality={100} alt="iconInfo" />
      <InformationsText>
        Чем больше деталей о себе вы укажете при обращении (Ваше ФИО, название
        заказа, суть проблемы), тем быстрее и проще мы сможем вам помочь
      </InformationsText>
    </InfoBlock>
  </Container>
);

export default ContactsLeftContainer;
