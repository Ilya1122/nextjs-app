import styled from 'styled-components';
import { Box, Button } from '@mui/material';

interface IContainer {
  spacesTop?: number;
}

export const Container = styled('section')<IContainer>`
  width: 100%;
  margin-top: ${({ spacesTop }) => spacesTop || 33}px;
  background-color: #F4F6FA;
  border-bottom: 1px solid #E3E6EC;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Wrapper = styled(Box)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 15px;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const WrapperGroup = styled(Box)`
  align-items: center;
  display: flex;
  width: 100%;

  @media (max-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const WrapperForm = styled(Box)`
  width: 100%;
  margin: 33px 0;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const SearchButton = styled(Button)`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #274765;
  border-radius: 8px;
  margin-top: 33px;
  &:hover {
    background: #41617F;
  }
  &:active {
    background: #1D3D5B;
  }
`;

export const ContainerButton = styled(Box)`
  border-top: 1px solid #E3E6EC;
  width: 100%;
  background: #FAFBFD;
  padding: 20px 0;
`;

export const ButtonDiscard = styled(Button)`
  background-color: rgba(39, 71, 101, 0.06);
  height: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #274765;
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  max-width: 196px;
  justify-content: center;
  text-transform: inherit;
  &:hover {
    background: #274765;
    color: #ffffff;
  }
  &:active {
    background: #1D3D5B;
    color: #ffffff;
  }
`;
