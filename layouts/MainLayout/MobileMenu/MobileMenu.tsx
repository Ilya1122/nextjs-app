import React from 'react';
import { useRouter } from 'next/router';
import { Drawer } from '@mui/material/';
import MobileMenuContent from './MobileMenuContent';
import { Container } from './styles';

interface IMobileMenu {
  open: boolean,
  setOpen: (open: boolean) => void,
}

const MobileMenu: React.FC<IMobileMenu> = ({ open, setOpen }) => {
  const { pathname } = useRouter();

  const clearPath = () => `/${pathname?.split('/')?.[1]}`;

  const toggleDrawer = (
    openss: boolean,
  ) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(openss);
  };

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={toggleDrawer(false)}
    >
      <Container
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        role="presentation"
      >
        <MobileMenuContent activeLink={clearPath()} />
      </Container>
    </Drawer>
  );
};

export default MobileMenu;
