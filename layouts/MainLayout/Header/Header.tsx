import React from 'react';
import Image from 'next/image';
// Components
import HeaderLogo from './HeaderLogo';
import HeaderButtons from './HeaderButtons';
import HeaderLinks from './HeaderLinks';
// Styles
import { HeaderWrapper, HeaderContainer, MenuIconBox } from './styles';

export interface HeaderProps {
  isLight?: boolean;
  openMobileMenuHandler: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLight, openMobileMenuHandler }) => (
  <HeaderWrapper
    $isLight={isLight}
  >
    <HeaderContainer>
      <HeaderLogo isLight={isLight} />
      <HeaderLinks isLight={isLight} />
      <HeaderButtons isLight={isLight} />
      <MenuIconBox onClick={openMobileMenuHandler}>
        {isLight ? (
          <Image src="/icons/menuIconWhite.svg" width={30} height={30} />
        ) : (
          <Image src="/icons/menuIcon.svg" width={30} height={30} />
        )}
      </MenuIconBox>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
