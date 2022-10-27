import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  width: 47%;
  max-width: 570px;
  height: fit-content;
  border: 1px solid #E3E6EC;
  background-color: #FAFBFD;
  border-radius: 14px;
  margin-bottom: 30px;
  flex-direction: column;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    z-index: 100;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled(Box)`
  padding: 30px;
  flex-direction: column;

  @media (max-width: 991px) {
    padding: 20px;
  }

  @media (max-width: 700px) {
    padding: 16px;
  }
`;

export const DescriptionText = styled(Box)`
  width: 100%;
  max-width: 510px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
  margin-top: 20px;
  height: 69px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

export const MainCardReitingText = styled.span`
  color: #282828;
  line-height: 24px;
  font-weight: normal;
  font-size: 16px;
  margin-left: 12px;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 23px;
  }

  @media (max-width: 700px) {
    margin-left: 5px;
  }
`;

export const MainCardReitingTextSilver = styled.span`
  line-height: 24px;
  font-weight: normal;
  font-size: 16px;
  color: #848484;
  margin-left: 5px;
  display: flex;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 23px;
  }
`;

export const BoxReviews = styled(Box)`
  display: flex;
  margin-left: 30px;
  align-items: center;
  @media (max-width: 991px) {
    margin-left: 0;
  }
`;
