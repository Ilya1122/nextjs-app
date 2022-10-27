import { Select, Box } from '@mui/material';
import styled from 'styled-components';

export const IconBox = styled(Box)`
  height: 18px;
  width: 18px;
  right: 25px;
`;

export const Container = styled(Select)`
  height: 55px;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #FAFBFD;

  .MuiSelect-outlined {
    height: 55px;
    font-weight: 400;
    line-height: 24px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    transition: 0.5s ease;
    border: 1px solid #E3E6EC;
    box-sizing: border-box;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid #E3E6EC;
    box-sizing: border-box;
  }

  fieldset {
    box-sizing: border-box;
    border: 1px solid #E3E6EC;
    box-sizing: border-box;
  }
`;
