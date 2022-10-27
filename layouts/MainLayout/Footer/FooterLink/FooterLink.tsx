import Link from 'next/link';
import { footerLink } from '../constants';
import { FooterLinkContainer, Footerlink } from './styles';

const FooterLink = () => (
  <FooterLinkContainer>
    {footerLink.map((item) => (
      <Link key={item.id} href={item.path} passHref>
        <Footerlink>{item.text}</Footerlink>
      </Link>
    ))}
  </FooterLinkContainer>
);

export default FooterLink;
