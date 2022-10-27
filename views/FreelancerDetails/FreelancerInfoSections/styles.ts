import styled from 'styled-components';
import { Box } from '@mui/material';

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
  height: fit-content;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const WrapperBoxLeft = styled(Box)`
  display: flex;
  width: 60%;
  padding: 40px 0;

  @media (max-width: 1100px) {
    padding: 0 30px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
    align-items: center;
  }
`;

export const WrapperBoxRight = styled(Box)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #E3E6EC;
  flex: 1;
  margin-left: 85px;
  padding: 63px 0 63px 61px;

  @media (max-width: 1200px) {
    padding: 63px 0 63px 40px;
    margin-left: 40px;
  }

  @media (max-width: 1100px) {
    flex-direction: row;
    align-items: center;
    padding: 35px 20px;
    border-left: none;
    margin-left: 0;
    justify-content: space-between;
    background: #F4F6FA;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    border-left: none;
    padding: 0;
    align-items: flex-start;
  }
`;
