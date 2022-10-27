import styled from 'styled-components';
import { Box } from '@mui/material';

export const BoxItem = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 1110px) {
    width: 33%;
    padding-left: 20px;
  }

  @media (max-width: 650px) {
    width: 100%;
    padding: 26px 0 26px 20px;
  }
`;

export const BoxText = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

export const Title = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
`;

export const SubTitle = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
`;

export const BoxItemLocations = styled(Box)`
  display: flex;
  padding: 26px 0;
  border-top: 1px solid #E3E6EC;
  border-bottom: 1px solid #E3E6EC;
  align-items: center;
  margin: 23px 0;

  @media (max-width: 1110px) {
    width: 33%;
    margin: 0;
    border: none;
    border-left: 1px solid #E3E6EC;
    border-right: 1px solid #E3E6EC;
    padding-left: 20px;
  }

  @media (max-width: 650px) {
    width: 100%;
    border: none;
    border-top: 1px solid #E3E6EC;
    border-bottom: 1px solid #E3E6EC;
  }
`;
