import React from 'react';
import { TextFieldProps } from '@mui/material';
import { TextFieldContainer } from './styles';

const Input: React.FC<TextFieldProps> = ({ ...props }) => (
  <TextFieldContainer
    {...props}
    variant="outlined"
  />
);

export default Input;
