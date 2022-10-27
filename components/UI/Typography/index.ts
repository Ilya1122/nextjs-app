import styled from 'styled-components';
import { Typography } from '@mui/material';

interface ITypography {
  marginTop?: number
}

export const StyledTypography = styled(Typography)`
  color: #000000;
  font-weight: 700;
  font-style: normal;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
`;

export const MainTitlePerformers = styled.h2`
  color: #282828;
  font-weight: 700;
  font-style: normal;
  font-size: 36px;
  line-height: 46px;
  text-align: center;

  @media (max-width: 991px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const MainTitleCard = styled.span`
  color: #282828;
  font-size: 24px;
  line-height: 34px;
  text-align: left;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 991px) {
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const MainSubTitleCard = styled(StyledTypography)`
  color: #848484;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const MainSubTitleCardBlack = styled(StyledTypography)`
  color: #282828;
  margin-left: 5px;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;

  @media (max-width: 1020px) {
    margin-left: 0;
  }
`;

export const MainCardDescription = styled(StyledTypography)`
  color: #848484;
  line-height: 23px;
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  overflow: hidden;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const MainCardReitingText = styled(StyledTypography)`
  color: #282828;
  line-height: 24px;
  font-weight: normal;
  font-size: 16px;
  margin-left: 12px;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 24px;
    background-color: red;
  }
`;

export const MainCardReitingTextSilver = styled(StyledTypography)`
  color: #848484;
  margin-left: 0;
  display: flex;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const MainCardReitingTextGreen = styled(StyledTypography)`
  color: green;
  margin-left: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const MainTitlePlatfotm = styled.h2`
  color: #282828;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  text-align: left;
  margin: 5px 0 48px 0;
  font-style: normal;

  @media (max-width: 991px) {
    font-size: 24px;
    line-height: 34px;
    margin: 35px 0 25px 0;
  }
`;

export const MainTitlePlatfotmItem = styled(StyledTypography)`
  color: #282828;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  width: 100%;
  max-width: 360px;

  @media (max-width: 991px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const MainTitlePlatfotmItemSilver = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
  width: 100%;
  max-width: 360px;
  text-align: left;
`;

export const TitleSlider = styled(Typography)`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  color: #282828;
  margin-top: 98px;

  @media (max-width: 1200px) {
    margin-top: 65px;
  }

  @media (max-width: 991px) {
    margin-top: 35px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const TitleSlideItem = styled(Typography)`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #282828;
  text-align: left;

  @media (max-width: 991px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const SubTitleSlidePrice = styled(Typography)`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #848484;
  text-align: left;
  font-style: normal;
`;

export const TitleSlidePrice = styled('span')`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
  text-align: left;
  font-style: normal;
`;

export const DescSlideText = styled(Typography)`
  height: 69px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
  text-align: left;
  margin-bottom: 15px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

export const TextDocument = styled('p')`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  margin-top: ${({ marginTop }: ITypography) => marginTop || 0}px;
  width: 100%;
  max-width: 1170px;

  @media (max-width: 1200px) {
    margin-top: 10px;
  }

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 23px;
  }
`;

export const TitleDocument = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #282828;
  margin-top: ${({ marginTop }: ITypography) => marginTop || 0}px;
  width: 100%;
  max-width: 1170px;

  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 34px;
  }
`;

export const InformationsText = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #848484;
  width: 100%;
  margin-left: 14px;
`;
