import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled('section')`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  justify-content: space-between;
  background-color: #ffffff;
  margin-bottom: 70px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const BoxLeft = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;
