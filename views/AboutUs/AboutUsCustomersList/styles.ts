import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

interface IText {
  widthitemtext?: number
}

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 33px;
`;

export const BoxImage = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background-color: rgba(39, 71, 101, 0.06);

  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

export const Text = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
  margin-left: 22px;
  width: 100%;
  max-width: ${({ widthitemtext }: IText) => widthitemtext || 245}px;

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 23px;
    max-width: 210px;
    margin-left: 16px;
  }
`;
