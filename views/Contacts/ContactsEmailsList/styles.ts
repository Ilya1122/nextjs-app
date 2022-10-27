import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

export const ContainerList = styled(Box)`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 89px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 30px;
    max-width: 100%;
    justify-content: space-between;
  }
`;

export const BoxItem = styled(Box)`
  width: 100%;
  max-width: 270px;
  display: flex;
  background: #FAFBFD;
  border-radius: 10px;
  padding: 30px;
  margin: 0 0 30px 30px;
  height: fit-content;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin: 0;
    width: 45%;
    max-width: 400px;
    margin-bottom: 30px;
    height: 179px;
  }

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    max-width: 100%;
    margin-bottom: 30px;
    height: fit-content;
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
