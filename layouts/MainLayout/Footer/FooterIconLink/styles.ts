import styled from 'styled-components';
import { Box, Link } from '@mui/material';

export const FooterLinkContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const LinkIcon = styled(Link)`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.pallette.mainRed};
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
`;
