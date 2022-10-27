import styled from 'styled-components';
import { Box } from '@mui/material';

export const ContainerPlatform = styled('section')`
  display: flex;
  background-color: #ffffff;
  margin-top: 70px;
  width: 100%;
  padding: 0 15px;
  justify-content: center;

  @media (max-width: 1200px) {
    margin-top: 60px;
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    margin-top: 10px;
    padding: 0;
  }
`;

export const WrapperPlatform = styled(Box)`
  width: 100%;
  display: flex;
  max-width: 1170px;
  padding: 100px 0;

  @media (max-width: 1200px) {
    padding: 87px 0;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const ImageBox = styled(Box)`
  width: 500px;
  height: 534px;

  @media (max-width: 1200px) {
    width: 382px;
    height: 502px;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const ImageBoxMobile = styled(Box)`
  width: 100%;
  height: 239px;
  display: none;

  @media (max-width: 991px) {
    display: block;
  }
`;

export const ImageMobile = styled.img`
  width: 100%;
  height: 239px;
  display: none;

  @media (max-width: 991px) {
    display: block;
  }
`;

export const BoxPlatform = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  @media (max-width: 1200px) {
    margin-left: 60px;
  }

  @media (max-width: 991px) {
    margin-left: 0;
    padding: 0 17px;
    align-items: center;
  }
`;

export const IconBoxBlue = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #3B5B79;
  border-radius: 50%;
`;
