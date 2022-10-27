import Link from 'next/link';
import { headerLink } from '../constants';
import { HeaderLinkContainer, Headerlink } from './styles';

export interface HeaderLinksProps {
  isLight?: boolean;
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({ isLight }) => (
  <HeaderLinkContainer>
    {headerLink.map((item) => (
      <Link key={item.id} href={item.path} passHref>
        <Headerlink $isLight={isLight}>
          {item.text}
        </Headerlink>
      </Link>
    ))}
  </HeaderLinkContainer>
);

export default HeaderLinks;
