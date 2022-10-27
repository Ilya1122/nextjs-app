import styled from 'styled-components';
import { Box } from '@mui/material';

export const LeftContainer = styled(Box)`
  width: fit-content;
  color: #000000;
  display: flex;
  align-items: center;
  height: 100%;

  img {
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const ImageLogo = styled(Box)`
  width: 126px;
  height: 27px;

  @media (max-width: 991px) {
    width: 100px;
    height: 22px;
  }
`;
