import styled from 'styled-components';
import {
  Typography, Box, Button, Pagination,
} from '@mui/material';

export const TablePagination = styled(Pagination)`

  .MuiPagination-ul li button {
    background: ${({ theme }) => theme.pallette.lightBckg};
    color: ${({ theme }) => theme.pallette.darkBlue};
    height: 40px;
    width: 40px;
    border-radius: 8px;
    font-size: 14px;
    &.Mui-selected {
      background: ${({ theme }) => theme.pallette.darkBlue};
      color: ${({ theme }) => theme.pallette.mainWhite};
    }
  }

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const Label = styled(Typography)`
  font-weight: 400;
  line-height: 24px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.pallette.lightText};
  margin-right: 14px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LabelMobile = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: ${({ theme }) => theme.pallette.lightText};
  display: none;
  margin: 15px 0;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const PaginationContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

export const PaginationCountBtn = styled(Button)`
  height: 40px;
  min-width: 40px;
  width: 40px;
  color: ${({ theme }) => theme.pallette.darkBlue};
  text-transform: capitalize;
  background: ${({ theme }) => theme.pallette.lightBckg};
  border-radius: 8px;
  box-shadow: none;
  margin-left: 5px;
  font-size: 14px;

  &.selected {
    background: ${({ theme }) => theme.pallette.darkBlue};
    color: ${({ theme }) => theme.pallette.mainWhite};
  }
`;
