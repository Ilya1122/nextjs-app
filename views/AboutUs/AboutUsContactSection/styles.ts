import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled('section')`
  display: flex;
  width: 100%;
  padding: 100px 0 70px 0;
  justify-content: center;
  background-color: #FAFBFD;

  @media (max-width: 1200px) {
    padding: 75px 0;
  }

  @media (max-width: 991px) {
    padding: 21px 0 35px 0;
  }
`;

export const ContainerFixed = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxDesText = styled(Box)`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const InfoBlock = styled(Box)`
  display: flex;
`;
