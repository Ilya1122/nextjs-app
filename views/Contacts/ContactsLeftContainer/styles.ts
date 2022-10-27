import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  width: 50%;
  max-width: 470px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const InfoBlock = styled(Box)`
  display: flex;
`;
