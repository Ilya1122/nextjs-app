import styled from 'styled-components';
import { Box } from '@mui/material';

export const ContainerSlider = styled(Box)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

export const BoxArrovRightIcon = styled(Box)`
  position: absolute;
  right: 0;
  bottom: 98px;
  cursor: pointer;
  z-index: 100;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 1200px) {
    bottom: 50px;
  }

  @media (max-width: 991px) {
    bottom: 20px;
  }
`;

export const BoxArrovLefttIcon = styled(Box)`
  position: absolute;
  left: 0;
  bottom: 98px;
  cursor: pointer;
  z-index: 100;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 1200px) {
    bottom: 50px;
  }

  @media (max-width: 991px) {
    bottom: 20px;
  }
`;
