import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgba(250,251,253,1);
`;

export const BoxSlider = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 38px;
  padding: 0 15px;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    margin-top: 20px;
    padding: 0 20px;
  }
`;
