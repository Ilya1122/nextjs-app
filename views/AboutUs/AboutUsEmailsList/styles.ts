import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

export const ContainerList = styled(Box)`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 959px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    justify-content: space-between;
  }
`;

export const BoxItem = styled(Box)`
  width: 100%;
  max-width: 270px;
  display: flex;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px;
  margin: 0 0 30px 30px;
  height: fit-content;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 45%;
    margin: 0;
    margin-bottom: 30px;
  }

  @media (max-width: 700px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const QuestionText = styled(Typography)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #274765;
  margin-bottom: 24px;
`;

export const EmailText = styled(Button)`
  width: fit-content;
  height: fit-content;
  padding: 0;
  box-shadow: none;
  cursor: pointer;
  text-transform: inherit;
  &:hover {
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
  }
`;

export const EmailLink = styled('a')`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #274765;
`;
