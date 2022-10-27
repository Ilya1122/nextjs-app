import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #F4F6FA;
  border-radius: 10px;
  width: 344px;
  padding: 20px;
  height: fit-content;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 344px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const HeaderCard = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    margin-bottom: 18px;
  }
`;

export const UserInfoText = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 23px;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export const NameUser = styled(Box)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
`;

export const EstimateBlock = styled(Box)`
  display: flex;
  margin-top: 7px;
  align-items: flex-start;
`;

export const EstimateText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #282828;
  margin: 0 5px 0 9px;

  @media (max-width: 600px) {
    margin: 0 5px 0 0;
  }
`;

export const TextReview = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;
