import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #FAFBFD;
  border-radius: 14px;
  width: 370px;
  height: 344px;
  padding: 40px;

  @media (max-width: 1200px) {
    width: 50%;
    max-width: 370px;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
    align-items: center;
    height: fit-content;
  }

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

export const WrapTitle = styled.span`
  width: auto;
  text-align: left;
  margin-left: 20px;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #282828;
  margin-bottom: 18px;

  @media (max-width: 700px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ButtonAwards = styled(Button)`
  width: 290px;
  height: 60px;
  border-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #3C3C3C;
  text-transform: inherit;
  display: flex;
  justify-content: space-between;
  padding: 0 19px 0 23px;

  :nth-child(2) {
    background: #DDF4FF;
    margin-bottom: 16px;
    div {
      background: #B3DEF3;
    }
    &:hover {
      background: #E3FAFB;
      div {
        background: #BDE8FD;
      }
    }
  }

  :nth-child(3) {
    background: #FFF6CF;
    margin-bottom: 15px;
    div {
      background: #F3E398;
    }
    &:hover {
      background: #FFFCD5;
      div {
        background: #EFE2A6;
      }
    }
  }
  :nth-child(4) {
    background: #FAEFF1;
    div {
      background: #F3D2D8;
    }
    &:hover {
      background: #FEF5F7;
      div {
        background: #FDDCE2;
      }
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 290px;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BoxIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #B3DEF3;
`;
