import Image from 'next/image';
import { FooterLinkContainer, LinkIcon } from './styles';
import { footerIconLink } from '../constants';

const FooterIconLink = () => (
  <FooterLinkContainer>
    {footerIconLink.map((item) => (
      <LinkIcon href={item.path} key={item.id} target="_blank">
        <Image src={item.img} width={16} height={16} quality={100} alt="icon" />
      </LinkIcon>
    ))}
  </FooterLinkContainer>
);

export default FooterIconLink;
