import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const Container = styled.section`
  width: 100%;
  background: #FAFBFD;
  border-bottom: 1px solid #E3E6EC;
`;

export const Wrapper = styled(Box)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 1110px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const LeftBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 843px;
  padding: 40px 0;

  @media (max-width: 1110px) {
    max-width: 100%;
    padding: 40px 30px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0;
    margin-bottom: 16px;
  }
`;

export const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-right: 87px;

  @media (max-width: 650px) {
    margin: 0;
    width: 100%;
    padding: 0 20px;
    margin-top: 16px;
  }
`;

export const TitleCompany = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #282828;
  margin-bottom: 8px;

  @media (max-width: 650px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const DescriptionText = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  width: 100%;
  max-width: 432px;

  @media (max-width: 650px) {
    font-size: 14px;
    line-height: 23px;
    max-width: 100%;
  }
`;

export const RigntBox = styled(Box)`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #E3E6EC;
  justify-content: center;
  padding-left: 65px;

  @media (max-width: 1200px) {
    padding-left: 30px;
  }

  @media (max-width: 1110px) {
    padding-left: 0;
    background: #F4F6FA;
    flex-direction: row;
    justify-content: space-between;
    border-left: none;
    border-top: 1px solid #E3E6EC;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    background: #F4F6FA;
  }
`;

export const Image = styled.img`
  width: 284px;
  height: 284px;

  @media (max-width: 800px) {
    width: 184px;
    height: 184px;
  }

  @media (max-width: 650px) {
    width: 100%;
    height: 100%;
    max-width: 320px;
    object-fit: cover;
  }

  @media (max-width: 320px) {
    background: #ffffff;
  }
`;
