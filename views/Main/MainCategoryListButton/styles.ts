import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  max-width: 1170px;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  padding: 50px;
  border-radius: 30px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.1));

  @media (max-width: 991px) {
    margin-top: 44px;
    padding: 30px 20px 30px 20px;
    max-width: 930px;
  }
`;

export const ContainerTitle = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: #282828;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  margin: 0;
`;

export const ContainerButton = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

export const IconBoxBlue = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #B3DEF3;
  border-radius: 50%;
`;

export const IconBoxYellow = styled(IconBoxBlue)`
  background: #E6D89C;
`;

export const IconBoxPink = styled(IconBoxBlue)`
  background: #F3D2D8;
`;

export const BlueButton = styled(Button)`
  width: 100%;
  max-width: 338px;
  height: 77px;
  background: #DDF4FF;
  color: #282828;
  font-style: normal;
  font-size: 20px;
  line-height: 26px;
  text-transform: inherit;
  font-weight: 400;
  box-shadow: none;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  justify-content: space-between;
  padding: 0 24px 0 31px;
  &:hover {
    background: #E3FAFB;
    box-shadow: none;
    div {
      background: #BDE8FD;
    }
  }
  &:active {
    background: #E3FAFB;
  }

  @media (max-width: 930px) {
    margin-bottom: 12px;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const YellowButton = styled(Button)`
  width: 100%;
  max-width: 338px;
  height: 77px;
  background: #FFF6CF;
  color: #282828;
  font-style: normal;
  font-size: 20px;
  line-height: 26px;
  text-transform: inherit;
  font-weight: 400;
  box-shadow: none;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  justify-content: space-between;
  padding: 0 24px 0 31px;
  margin: 0 16px;
  &:hover {
    background: #FFFCD5;
    box-shadow: none;
    div {
      background: #EFE2A6;
    }
  }
  &:active {
    background: #FFFCD5;
  }

  @media (max-width: 930px) {
    margin-bottom: 12px;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const PinkButton = styled(Button)`
  width: 100%;
  max-width: 338px;
  height: 77px;
  background: #FAEFF1;
  color: #282828;
  font-style: normal;
  font-size: 20px;
  line-height: 26px;
  text-transform: inherit;
  font-weight: 400;
  box-shadow: none;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  justify-content: space-between;
  padding: 0 24px 0 31px;
  &:hover {
    background: #FEF5F7;
    box-shadow: none;
    div {
      background: #FDDCE2;
    }
  }
  &:active {
    background: #FEF5F7;
  }

  @media (max-width: 930px) {
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
  }
`;
