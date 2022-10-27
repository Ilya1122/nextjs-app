import styled, { css } from 'styled-components';
import { IconButton } from '@mui/material';

const toggleHeaderColor = css<{ $isLight?: boolean }>`
  border-bottom: 1px solid ${({ $isLight }) => ($isLight ? 'rgba(227, 230, 236, 1)' : 'rgba(255, 255, 255, 0.08)')};
  background: ${({ $isLight }) => (
    $isLight ? 'rgba(255, 255, 255, 1)' : 'linear-gradient(90deg, #1E354A 0%, #1A3248 11.25%, #0A2641 27.92%, #06223E 36.77%, #05223E 56.02%, #031F3A 76.35%, #001A31 100%)'
  )};
  box-shadow: 0px 22px 24px ${({ $isLight }) => ($isLight ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.04)')};
`;

export const HeaderWrapper = styled.header<{ $isLight?: boolean }>`
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${toggleHeaderColor};

  @media (max-width: 991px) {
    height: 60px;
  }
`;

export const HeaderContainer = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 0 15px;

`;

export const MenuIconBox = styled(IconButton)`
  padding: 0;
  display: none;
  margin-left: auto;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 991px) {
    display: block;
  }
`;
