import styled from 'styled-components';
import { Box } from '@mui/material';

interface ITitlePage {
  marginTop: number;
}

export const WrapperFixed = styled(Box)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const TitlePage = styled.h2`
  width: 100%;
  max-width: 501px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  color: #282828;
  margin-top: ${({ marginTop }: ITitlePage) => marginTop || 0}px;

  @media (max-width: 1200px) {
    margin-top: 24px;
  }

  @media (max-width: 991px) {
    margin-top: 14px;
    font-size: 24px;
    line-height: 34px;
  }
`;
