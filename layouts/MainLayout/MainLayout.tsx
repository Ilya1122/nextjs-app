import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { MainWrapper } from './styles';

const MainLayout: React.FC = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const openMobileMenuHandler = () => setOpenMenu(true);

  useEffect(() => {
    if (containerRef?.current?.scrollTop) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  }, [containerRef?.current?.scrollTop]);

  return (
    <>
      <Header
        isLight={pathname !== '/'}
        openMobileMenuHandler={openMobileMenuHandler}
      />

      <MainWrapper ref={containerRef}>
        {children}
      </MainWrapper>

      <Footer />
      <MobileMenu open={openMenu} setOpen={setOpenMenu} />
    </>
  );
};

export default MainLayout;
