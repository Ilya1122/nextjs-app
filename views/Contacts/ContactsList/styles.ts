import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const ContainerList = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 28px 0 12px 0;
`;

export const BoxItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const BoxText = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;

export const TitleContact = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
`;

export const TextContact = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
`;

export const BoxIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(39, 71, 101, 0.06);
  width: 44px;
  height: 44px;
`;

export const TelegramLink = styled('span')`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #274765;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const EmailLink = styled('a')`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
  transition: 0.5s ease;
  &:hover {
    opacity: 0.5;
  }
`;
