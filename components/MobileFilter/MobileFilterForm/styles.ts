import styled from 'styled-components';
import { Box, Button } from '@mui/material/';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 450px;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonFilter = styled(Button)`
  width: 100%;
  max-width: 280px;
  height: 60px;
  background: #274765;
  border-radius: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  text-transform: inherit;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 17px;

  &:hover {
    background: #41617F;
    color: #FFFFFF;
  }
  &:active {
    background: #1D3D5B;
    color: #FFFFFF;
  }
`;
