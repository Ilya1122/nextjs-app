import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import Input from 'components/UI/Input';

export const Container = styled(Box)`
  margin-right: 10px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

export const Label = styled(Typography)`
  margin-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
`;

export const TextField = styled(Input)`
  width: 100%;
  padding-right: 10px;
  .MuiOutlinedInput-root {
    border-radius: 10px;
    height: 55px;
    box-sizing: border-box;
    background: #FFFFFF;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    :nth-child(1) {
      padding-right: 10px;
    }
  }
`;

export const WrapInput = styled(Box)`
  width: 100%;
  display: flex;
  max-width: 270px;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;
