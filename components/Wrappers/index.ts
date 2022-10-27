import styled from 'styled-components';
import { Box } from '@mui/material';

interface IWrappers {
  background?: string,
  imgUrl?: string,
  fullHeight?: string,
  spacesBootom?: number,
  justify?: string,
  spacesTop?: number,
}

export const WrapperFullMain = styled.main`
  height: 100;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const WrapperFull = styled.main`
  height: calc(100% - 160px);
  overflow-y: auto;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 251, 253, 1);

  @media (max-width: 991px) {
    background-size: 100% 493px;
  }
`;

export const WrapperFixed = styled(Box)<IWrappers>`
  width: 100%;
  max-width: 1200px;
  height: ${({ fullHeight }) => fullHeight || 'auto'};
  display: flex;
  flex-direction: column;
  background-color: ${({ background }) => background || '#ffffff'};
  padding-bottom: ${({ spacesBootom }) => spacesBootom || 0}px;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const WrapperFixedRow = styled(Box)<IWrappers>`
  width: 100%;
  max-width: 1200px;
  height: ${({ fullHeight }) => fullHeight || 'auto'};
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ background }) => background || '#ffffff'};
  padding-bottom: ${({ spacesBootom }) => spacesBootom || 0}px;
  padding-top: ${({ spacesTop }) => spacesTop || 0}px;
  padding-left: 15px;
  padding-right: 15px;
`;
