import Link from 'next/link';
import FooterLink from './FooterLink';
import FooterIconLink from './FooterIconLink';
import {
  FooterWrapper, FooterContainer, Image,
} from './styles';

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterContainer>
      <Link href="/" passHref>
        <Image src="/icons/logoBlack.svg" alt="logo" />
      </Link>
      <FooterLink />
      <FooterIconLink />
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
