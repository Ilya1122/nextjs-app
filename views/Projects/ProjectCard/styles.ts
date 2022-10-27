import styled from 'styled-components';
import { Box, Button, Typography } from '@mui/material';

interface ITextdescription {
  fulltext?: string,
}

export const Container = styled(Box)`
  width: 100%;
  background: #FAFBFD;
  border: 1px solid #E3E6EC;
  box-sizing: border-box;
  border-radius: 14px;
  margin-bottom: 30px;
`;

export const HeaderCard = styled(Box)`
  width: 100%;
  border-bottom: 1px solid #E3E6EC;
  padding: 25px 30px;
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    padding: 20px 15px;
  }

  @media (max-width: 440px) {
    padding: 15px;
  }
`;

export const HeaderButton = styled(Button)`
  background: #F4F6FA;
  border: 1px solid #E3E6EC;
  border-radius: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #274765;
  margin-right: 10px;
`;

export const BodyCard = styled(Box)`
  width: 100%;
  padding: 30px 53px 30px 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    padding: 20px 15px;
  }

  @media (max-width: 440px) {
    padding: 15px;
  }
`;

export const TitleCard = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #282828;

  @media (max-width: 850px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const DateBlock = styled(Box)`
  width: 100%;
  display: flex;

  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

export const BlockText = styled(Box)`
  display: flex;
  margin: 6px 37px 0 0;
`;

export const TextSilver = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
  margin-right: 5px;

  @media (max-width: 850px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const TextBlack = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #282828;

  @media (max-width: 850px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Textdescription = styled(Typography)<ITextdescription>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 850px) {
    -webkit-line-clamp: ${(({ fulltext }) => fulltext || 5)};
    font-size: 14px;
    line-height: 23px;
    margin-top: 10px;
  }
`;
