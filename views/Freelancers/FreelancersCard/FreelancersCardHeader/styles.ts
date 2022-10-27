import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const HeaderCard = styled(Box)`
  box-sizing: border-box;
  padding: 20px;
  background: #F4F6FA;
  border-radius: 14px;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0;
    background: #ffffff;
  }
`;

export const TextBox = styled(Box)`
  margin-left: 19px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 61px;
  height: 61px;
  object-fit: cover;
  border-radius: 10px;
`;

export const NameUser = styled(Typography)`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #282828;

  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 34px;
  }
`;

export const TypeUserBox = styled(Box)`
  display: flex;

  @media (max-width: 815px) {
    flex-direction: column;
  }
`;

export const UserTypeText = styled(Box)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  margin-right: 10px;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const UserTypeTextBlack = styled(Box)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #282828;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
