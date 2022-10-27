import { emailsContacts } from '../constants';
import {
  ContainerList, BoxItem, QuestionText, EmailText, EmailLink,
} from './styles';

interface IEmailContacts {
  id: string,
  email: string,
  text: string,
}

const ContactsEmailsList: React.FC = () => (
  <ContainerList>
    {emailsContacts.map(({ id, email, text }: IEmailContacts) => (
      <BoxItem key={id}>
        <QuestionText>{text}</QuestionText>
        <EmailText>
          <EmailLink href={`mailto:${email}`}>
            {email}
          </EmailLink>
        </EmailText>
      </BoxItem>
    ))}
  </ContainerList>
);

export default ContactsEmailsList;
