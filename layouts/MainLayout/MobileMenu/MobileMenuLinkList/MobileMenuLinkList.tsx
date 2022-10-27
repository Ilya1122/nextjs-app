import Image from 'next/image';
import Link from 'next/link';
import { mobileMenuLink } from '../constants';
import { LinkBox, LinkText } from './styles';

interface IMobileMenuLinkList {
  activeLink: string,
}

const MobileMenuLinkList: React.FC<IMobileMenuLinkList> = ({ activeLink }) => (
  <>
    {mobileMenuLink.map((item) => (
      <Link href={item.link} passHref key={item.link}>
        <LinkBox>
          <LinkText active={activeLink === item.link}>{item.title}</LinkText>
          <Image src="/icons/arrovRightIcon.svg" width={21} height={21} alt="icon" />
        </LinkBox>
      </Link>
    ))}
  </>
);

export default MobileMenuLinkList;
