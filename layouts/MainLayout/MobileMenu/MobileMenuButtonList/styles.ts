import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  align-items: center;
`;

export const ButtonLink = styled(Button)`
  width: 100%;
  max-width: 280px;
  height: 50px;
  margin-bottom: 14px;
  background: #F4F6FA;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  &:hover {
    background: #274765;
    color: #ffffff;
  }
  &:active {
    background: #1D3D5B;
    color: #ffffff;
  }
`;
