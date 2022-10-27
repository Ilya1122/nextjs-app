import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import Input from 'components/UI/Input';
import Select from 'components/UI/Select';

interface IContainer {
  spaceRight?: number,
}

export const Container = styled(Box)<IContainer>`
  width: 100%;
  max-width: 260px;
  margin-right: ${({ spaceRight }) => spaceRight || 0}px;

  @media (max-width: 1200px) {
    max-width: 455px;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
    margin-right: 0;
  }
`;

export const Label = styled(Typography)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.pallette.lightText};
  font-weight: 400;
  line-height: 23px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
`;

export const TextField = styled(Input)`
  width: 100%;

  .MuiOutlinedInput-root {
    border-radius: 10px;
    height: 55px;
    background: #FFFFFF;
  }
`;

export const CustomSelect = styled(Select)`
  width: 100%;
`;
