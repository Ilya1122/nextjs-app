import styled from 'styled-components';
import { Box } from '@mui/material';

export const HeaderLinkContainer = styled(Box)`
  margin-left: 72px;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    margin-left: 30px;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Headerlink = styled.a<{ $isLight?: boolean}>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $isLight }) => ($isLight ? 'rgba(40, 40, 40, 1)' : 'rgba(255, 255, 255, 1)')};
  margin-right: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 1200px) {
    margin-right: 30px;
  }
`;
