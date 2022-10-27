import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const FooterCard = styled(Box)`
  width: 100%;
  border-top: 1px solid #E3E6EC;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 20px 15px;
  }

  @media (max-width: 440px) {
    padding: 15px;
  }
`;

export const BoxInfoItem = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 100px;

  @media (max-width: 1200px) {
    margin-right: 30px;
  }

  @media (max-width: 880px) {
    margin-right: 20px;
  }

  @media (max-width: 850px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const BoxIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background-color: rgba(39, 71, 101, 0.06);
  border-radius: 50%;
  margin-right: 19px;

  @media (max-width: 1200px) {
    margin-right: 10px;
  }

  @media (max-width: 850px) {
    width: 34px;
    height: 34px;
  }
`;

export const TextBlock = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #282828;

  @media (max-width: 850px) {
    font-size: 14px;
    line-height: 23px;
  }
`;

export const InfoSubTitle = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;

  @media (max-width: 850px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const ActionButton = styled(Button)`
  border-radius: 10px;
  width: 173px;
  height: 52px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #274765;
  background-color: rgba(39, 71, 101, 0.06);
  text-transform: inherit;
  &:hover {
    background: #274765;
    color: #ffffff;
  }
  &:active {
    background: #1D3D5B;
    color: #ffffff;
  }

  @media (max-width: 850px) {
    width: 100%;
    max-width: 250px;
    margin-top: 20px;
  }
`;
