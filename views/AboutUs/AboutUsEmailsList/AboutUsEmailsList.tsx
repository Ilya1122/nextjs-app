import { emailsAboutUs } from '../constants';
import {
  ContainerList, BoxItem, QuestionText, EmailText, EmailLink,
} from './styles';

interface IEmailContacts {
  id: string,
  email: string,
  text: string,
}

const AboutUsEmailsList: React.FC = () => (
  <ContainerList>
    {emailsAboutUs.map(({ id, email, text }: IEmailContacts) => (
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

export default AboutUsEmailsList;
