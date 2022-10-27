/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Image from 'next//image';
import { MenuItem } from '@mui/material';
import { SelectProps } from 'interfaces/';
import { Container, IconBox } from './styles';

const Select: React.FC<SelectProps> = ({ data = [] }) => (
  <Container
    defaultValue={data[0].value}
    IconComponent={(props) => (
      <IconBox {...props}>
        <Image width={18} height={18} src="/icons/arrowSelect.svg" />
      </IconBox>
    )}
  >
    {data.map(({ label, value }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
  </Container>
);

export default Select;
