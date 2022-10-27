import React from 'react';
import { Stack } from '@mui/material';
import {
  TablePagination as Pagination,
  PaginationContainer,
  Label, LabelMobile,
  PaginationCountBtn,
} from './styles';

interface TablePaginationProps {
  isCountRecords?: boolean;
}

const TablePagination: React.FC<TablePaginationProps> = ({ isCountRecords = true }) => (
  <PaginationContainer>
    <Pagination count={4} shape="rounded" />

    <LabelMobile>Кол-во отображаемых записей:</LabelMobile>

    {isCountRecords && (
      <Stack direction="row" alignItems="center">
        <Label>Кол-во отображаемых записей:</Label>
        <PaginationCountBtn>10</PaginationCountBtn>
        <PaginationCountBtn>15</PaginationCountBtn>
        <PaginationCountBtn className="selected">50</PaginationCountBtn>
        <PaginationCountBtn>99</PaginationCountBtn>
      </Stack>
    )}
  </PaginationContainer>
);

export default TablePagination;
