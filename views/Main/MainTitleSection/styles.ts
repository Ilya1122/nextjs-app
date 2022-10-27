import styled from 'styled-components';
import { BACKGROUD_IMG_URL } from 'utils/constants/constants';
import { Box } from '@mui/material';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(250, 251, 253, 1);
  background-image: url(${BACKGROUD_IMG_URL});
  background-repeat: no-repeat;
  background-size: 100% 621px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const ContainerSlideSite = styled(Box)`
  width: 100%;
  max-width: 1170px;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  margin-top: 50px;
  margin-bottom: 110px;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media (max-width: 991px) {
    margin-top: 35px;
    margin-bottom: 47px;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 24px;
    width: 100%;
    max-width: 200px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  width: 100%;
  max-width: 779px;
  font-weight: 700;
  font-style: normal;
  font-size: 56px;
  line-height: 68px;
  text-align: center;
  margin: 100px 0 20px 0;

  @media (max-width: 991px) {
    margin: 39px 0 16px 0;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
  }
`;

export const SubTitle = styled.h2`
  color: #B1D6F1;
  width: 100%;
  max-width: 503px;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin: 0;

  @media (max-width: 991px) {
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const IconBoxRed = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #F44B38;
  border-radius: 50%;
   &:hover {
     background: #FE5542;
   }
  &:active {
    background: #E03724;
  }
`;
