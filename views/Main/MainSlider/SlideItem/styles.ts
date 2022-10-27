import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const ContainerItem = styled(Box)`
  width: 370px;
  height: 441px;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.01);
  border-radius: 14px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 1200px) {
    height: 422px;
    padding: 20px;
    width: 290px;
  }

  @media (max-width: 991px) {
    padding: 10px;
    height: fit-content;
    width: 280px;
  }
`;

export const ContainerButton = styled(Box)`
  display: flex;

  @media (max-width: 991px) {
    justify-content: space-between;
  }
`;

export const BoxPrice = styled(Box)`
  display: flex;
  height: 82px;
  border-top: 1px solid #E3E6EC;
  border-bottom: 1px solid #E3E6EC;
  margin: 16px 0;
  align-items: center;
`;

export const BoxButton = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  border: 1px solid #E3E6EC;
  border-radius: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  margin: 0 10px 19px 0;

  @media (max-width: 991px) {
    margin: 0 0 14px 0;
  }
`;

export const BoxPriceText = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;

export const BoxPriceIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #274765;
  border-radius: 50%;
`;
