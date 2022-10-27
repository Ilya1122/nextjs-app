import React from 'react';
import { SelectProps } from 'interfaces/';
import {
  Container, Label, TextField, WrapInput,
} from './styles';

interface FormInputProps extends SelectProps {
  title: string;
  dataInputs: {
    placeholder: string
  }[]
}

const FilterFormInputGroup: React.FC<FormInputProps> = ({ title, dataInputs = [] }) => (
  <Container>
    <Label>{title}</Label>
    <WrapInput>
      {dataInputs?.map(({ placeholder }) => (
        <TextField key={placeholder} placeholder={placeholder} />
      ))}
    </WrapInput>
  </Container>
);

export default FilterFormInputGroup;
