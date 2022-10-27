import Image from 'next/image';
import Link from 'next/link';
import { LinkImage } from 'components/UI/LinkImage';
import { ImageLogo } from './styles';

interface HeaderLogoProps {
  isLight?: boolean;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ isLight }) => (
  <Link href="/" passHref>
    <LinkImage>
      <ImageLogo>
        {isLight ? (
          <Image src="/icons/logoBlack.svg" width={126} height={27} quality={100} alt="logo" />
        ) : (
          <Image src="/icons/logoWhite.svg" width={126} height={27} quality={100} alt="logo" />
        )}
      </ImageLogo>
    </LinkImage>
  </Link>
);

export default HeaderLogo;
