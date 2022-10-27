import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
  background-color: rgba(250,251,253,1);

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    margin-bottom: 30px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const Title = styled.h1`
  color: #ffffff;
  width: 779px;
  height: 136px;
  font-weight: 700;
  font-style: normal;
  font-size: 56px;
  line-height: 68px;
  text-align: center;
  margin: 100px 0 20px 0;
`;

export const SubTitle = styled.h2`
  color: #B1D6F1;
  width: 503px;
  height: 64px;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin: 0;
`;

export const IconBoxRed = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #F44B38;
  border-radius: 50%;
`;
