import styled from 'styled-components';
import { Box } from '@mui/material';

export const BoxItem = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    width: 33%;
    :nth-child(3) {
      padding-left: 26px;
    }
  }

  @media (max-width: 800px) {
    width: 33%;
  }

  @media (max-width: 700px) {
    width: 100%;
    border: none;
    padding: 25px 20px;

    :nth-child(3) {
      padding-left: 20px;
    }
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
  border-top: 1px solid#E3E6EC;
  border-bottom: 1px solid#E3E6EC;
  align-items: center;
  margin: 23px 0;
  width: 100%;

  @media (max-width: 1100px) {
    margin: 0;
    border: none;
    width: 33%;
    padding: 0 26px;
    border-left: 1px solid #E3E6EC;
    border-right: 1px solid #E3E6EC;
  }

  @media (max-width: 800px) {
    width: 33%;
  }

  @media (max-width: 700px) {
    width: 100%;
    border: none;
    padding: 25px 20px;
    border-top: 1px solid  #E3E6EC;
    border-bottom: 1px solid  #E3E6EC;
  }
`;
