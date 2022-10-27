import Image from 'next/image';
// import Link from 'next/link';
import MobileMenuLinkList from '../MobileMenuLinkList';
import MobileMenuButtonList from '../MobileMenuButtonList';
import {
  Container, HeaderMenu, IconBox, Link,
} from './styles';

interface IMobileMenuContent {
  activeLink: string,
}

const MobileMenuContent: React.FC<IMobileMenuContent> = ({ activeLink }) => (
  <Container>
    <HeaderMenu>
      <Link href="/">
        <Image src="/icons/logoBlack.svg" width={100} height={22} quality={100} alt="logo" />
      </Link>
      <IconBox>
        <Image src="/icons/closeIconBlack.svg" width={30} height={30} quality={100} alt="icon" />
      </IconBox>
    </HeaderMenu>

    <MobileMenuLinkList activeLink={activeLink} />

    <MobileMenuButtonList />

  </Container>
);

export default MobileMenuContent;
