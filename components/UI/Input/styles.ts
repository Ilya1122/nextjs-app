import { TextField } from '@mui/material';
import styled from 'styled-components';

export const TextFieldContainer = styled(TextField)`
  input {
    padding: 15px 20px;
    box-sizing: border-box;
  }

  .MuiOutlinedInput-root:hover fieldset {
    border: 1px solid #E3E6EC;
  }

  fieldset {
    transition: 0.5s ease;
    border: 1px solid #E3E6EC;
  }

  && {
    .Mui-focused {
      fieldset {
        border: 1px solid #E3E6EC;
      }
    }
  }
`;
