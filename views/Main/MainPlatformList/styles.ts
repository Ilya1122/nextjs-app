import styled from 'styled-components';
import { Box } from '@mui/material';

export const BoxItem = styled(Box)`
  display: flex;
  margin-bottom: 33px;
  align-items: center;

  @media (max-width: 991px) {
    align-items: flex-start;
  }
`;

export const BoxIcon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(39, 71,101, 0.06);
  width: 78px;
  height: 78px;
  margin-right: 22px;

  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
  }
`;

export const BoxText = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 991px) {
    margin-left: 16px;
    width: 100%;
    max-width: 217px;
  }
`;
