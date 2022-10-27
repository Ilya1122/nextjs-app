import styled from 'styled-components';
import { Box } from '@mui/material';

export const FooterLinkContainer = styled(Box)`
  width: 100%;
  margin-left: 40px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
    margin-bottom: 25px;
  }
`;

export const Footerlink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: ${({ theme }) => theme.pallette.mainBlack};
  cursor: pointer;
  margin-right: 40px;

  &:hover {
    opacity: 0.6;
  }

  /* @media (max-width: 850px) {
    margin-right: 0;
    width: 100%;
  } */
`;
