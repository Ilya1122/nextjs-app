import styled from 'styled-components';
import { Box } from '@mui/material';

interface IContainer {
  background?: string,
  reverse?: string,
}

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${({ background }: IContainer) => background || '#ffffff'};
`;

export const ContainerFixed = styled('section')`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 100px 15px;
  flex-direction: ${({ reverse }: IContainer) => reverse || 'row'};

  @media (max-width: 1200px) {
    padding: 75px 30px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    padding: 47px 20px;
  }

  @media (max-width: 600px) {
    padding: 0;
    align-items: center;
  }
`;

export const TitlePlatform = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  color: #282828;
  width: 100%;
  max-width: 488px;
  margin-bottom: 15px;

  @media (max-width: 1200px) {
    max-width: 396px;
  }

  @media (max-width: 991px) {
    text-align: center;
    max-width: 488px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 34px;
    text-align: center;
  }
`;

export const RigtBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: ${({ reverse }: IContainer) => (reverse ? '47px 100px 0 0' : '47px 0 0 100px')};
  width: 100%;
  max-width: 488px;

  @media (max-width: 1200px) {
    margin: ${({ reverse }: IContainer) => (reverse ? '20px 55px 0 0' : '20px 0 0 55px')};
  }

  @media (max-width: 991px) {
    margin: 35px 0 0 0;
  }

  @media (max-width: 600px) {
    padding: 0 20px 35px 20px;
  }
`;

export const Image = styled.img`
  width: 570px;
  height: 534px;
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 428px;
    height: 502px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImageMobile = styled.img`
  width: 100%;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;
