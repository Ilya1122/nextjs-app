import styled from 'styled-components';
import { Button } from '@mui/material';

interface IButton {
  lightbtnheader?: string,
}

export const StyledButton = styled(Button)`
  min-width: auto;
  min-height: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  text-transform: inherit;
  box-shadow: none;
`;

export const SlideItemButton = styled(StyledButton)`
  background-color: rgba(39, 71, 101, 0.06);
  border-radius: 10px;
  height: 50px;
  width: 100%;
  max-width: 310px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #274765;
  margin: 0 auto;
  &:hover {
    background-color: #274765;
    box-shadow: none;
    color: #ffffff;
  }
  &:active {
    background-color: #274765;
    color: #ffffff;
  }
`;

export const MainPlatformButton = styled(StyledButton)`
  background-color: #274765;
  border-radius: 8px;
  font-weight: bold;
  height: 56px;
  width: 100%;
  max-width: 240px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0 25px 0 30px;
  &:hover {
    background-color: #31516F;
    box-shadow: none;
    color: #ffffff;
  }
  &:active {
    background-color: #1D3D5B;
    color: #ffffff;
  }

  @media (max-width: 991px) {
    max-width: 281px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 35px;
  }
`;

export const MainCardBlueButton = styled(StyledButton)`
  background-color: rgba(39, 71, 101, 0.06);
  border-radius: 10px;
  height: 60px;
  margin-top: 21px;
  color: #274765;
  &:hover {
    background-color: #274765;
    box-shadow: none;
    color: #ffffff;
  }
  &:active {
    background-color: #1D3D5B;
    color: #ffffff;
  }

  @media (max-width: 991px) {
    margin-top: 14px;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const DarkButton = styled(Button)<{ $isLight?: boolean }>`
  min-width: auto;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $isLight }) => ($isLight ? 'rgba(244, 246, 250, 1)' : 'rgba(10, 39, 78, 1)')} ;
  color: ${({ $isLight }) => ($isLight ? '#848484' : '#B1D6F1')};
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  text-transform: inherit;
  font-weight: 400;
  box-shadow: none;
  margin-left: 10px;
  &:hover {
    background: ${({ $isLight }) => ($isLight ? '#FAFBFD' : '#1E3B62')};
    box-shadow: none;
  }
`;

export const MainRedButton = styled(Button)`
  width: 200px;
  height: 50px;
  background: #E22813;
  color: #ffffff;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  font-weight: 400;
  box-shadow: none;
  border-radius: 8px;
  margin-right: 16px;
  &:hover {
    background: #F43A25;
    box-shadow: none;
    div {
      background: #FE5542;
    }
  }
  &:active {
    background: #D61C07;
    div {
      background: #E03724;
    }
  }

  @media (max-width: 991px) {
    margin: 0 0 13px 0;
  }
`;

export const MainDarkButton = styled(Button)`
  width: 200px;
  height: 50px;
  background: none;
  color: #ffffff;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  font-weight: 400;
  box-shadow: none;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  &:hover {
    background: #31516F;
    box-shadow: none;
    border: none;
  }
  &:active {
    background: #274765;
    border: none;
    box-shadow: none;
  }
`;

export const MainDefaultButton = styled(Button)`
  width: 124px;
  height: 24px;
  background: none;
  color: #E22813;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  text-transform: inherit;
  font-weight: 400;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover {
    background: none;
  }
  &:active {
    background: none;
  }
`;
