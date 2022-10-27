import styled from 'styled-components';
import { Box, IconButton, Link as StyledLink } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  height: 100;
  display: flex;
  flex-direction: column;
`;

export const HeaderMenu = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconBox = styled(IconButton)`
  padding: 0;
  &:hover {
    opacity: 0.6;
  }
`;

export const Link = styled(StyledLink)`
  text-decoration: none;
`;
