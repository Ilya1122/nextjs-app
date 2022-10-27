import ContactsLeftContainer from '../ContactsLeftContainer';
import ContactsEmailsList from '../ContactsEmailsList';
import { Container } from './style';

const ContactsSections: React.FC = () => (
  <Container>
    <ContactsLeftContainer />
    <ContactsEmailsList />
  </Container>
);

export default ContactsSections;
