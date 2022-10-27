import Image from 'next/image';
import Link from 'next/link';
import { dataContacts } from '../constants';
import {
  ContainerList, BoxItem, BoxIcon, BoxText, TitleContact, EmailLink, TelegramLink,
} from './styles';

interface IContact {
  title: string,
  contact: string,
  id: string,
  img: string,
  link?: boolean,
}

const ContactsList: React.FC = () => (
  <ContainerList>
    {dataContacts.map(({
      title, contact, id, img, link,
    }: IContact) => (
      <BoxItem key={id}>
        <BoxIcon>
          <Image src={img} width={18} height={18} quality={100} alt="icon" />
        </BoxIcon>
        <BoxText>
          <TitleContact>{title}</TitleContact>
          {link ? (
            <Link href="#" passHref>
              <TelegramLink>
                {contact}  <Image src="/icons/arrowBlueIcon.svg" width={19} height={19} quality={100} alt="arrow" />
              </TelegramLink>
            </Link>
          ) : (
            <EmailLink href={`mailto:${contact}`}>{contact}</EmailLink>
          )}
        </BoxText>
      </BoxItem>
    ))}
  </ContainerList>
);

export default ContactsList;
