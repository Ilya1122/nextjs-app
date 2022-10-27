import styled from 'styled-components';
import { Box } from '@mui/material';

export const ContainerItem = styled(Box)`
  width: 47%;
  max-width: 570px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 14px;
  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.1));
  background-color: #ffffff;
  cursor: pointer;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    max-width: 280px;
    padding: 10px;
  }
`;

export const HeaderCard = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px 20px 20px;
  align-items: center;
  background: #FAFBFD;
  border-radius: 14px;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    padding: 14px;
  }
`;

export const BoxUser = styled(Box)`
  display: flex;
  align-items: center;
`;

export const BoxUserName = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 19px;
  @media (max-width: 991px) {
    margin-left: 14px;
  }
`;

export const BoxText = styled(Box)`
  display: flex;

  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContainerRaiting = styled(Box)`
  display: flex;
  margin-top: 13px;
  align-items: center;

  @media (max-width: 991px) {
    justify-content: space-between;
  }
`;

export const BoxRaiting = styled(Box)`
  display: flex;
  margin: 0;
  align-items: center;
`;

export const BoxReviews = styled(Box)`
  display: flex;
  margin-left: 30px;
  align-items: center;

  @media (max-width: 991px) {
    margin-left: 0;
  }
`;

export const MainCardReitingText = styled(Box)`
  color: #282828;
  line-height: 24px;
  font-weight: normal;
  font-size: 16px;
  margin-left: 12px;
  display: flex;
  @media (max-width: 991px) {
    margin-left: 7px;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const MainCardReitingTextSilver = styled(MainCardReitingText)`
  color: #848484;
  margin-left: 5px;
  display: flex;
`;
