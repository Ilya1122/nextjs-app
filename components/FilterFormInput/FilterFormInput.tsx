import React from 'react';
import {
  Container, Label, TextField, CustomSelect,
} from './styles';

interface IFilterFormInput {
  title: string;
  data?: { value: string | number, label: string }[],
  spaceRight?: number;
}

const FilterFormInput: React.FC<IFilterFormInput> = ({ title, data = [], spaceRight }) => (
  <Container spaceRight={spaceRight}>
    <Label>{title}</Label>
    {data.length ? (
      <CustomSelect data={data} />
    ) : (
      <TextField placeholder="Дизайн брошюры" />
    )}
  </Container>
);

export default FilterFormInput;
