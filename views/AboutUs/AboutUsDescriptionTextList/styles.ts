import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-top: 65px;
    max-width: 100%;
  }
`;

export const BoxItem = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #FAFBFD;
  border-radius: 10px;
  width: 45%;
  max-width: 400px;
  height: 179px;
  margin: 0 0 30px 30px;
  padding: 30px 53px 27px 26px;

  @media (max-width: 1200px) {
    justify-content: center;
    margin: 0 0 30px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;
    padding: 30px 26px;
  }
`;

export const BoxEllipse = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #274765;
  width: 34px;
  height: 34px;
  border-radius: 50%;

  @media (max-width: 991px) {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const Ellipse = styled(Box)`
  background: #274765;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const TextItem = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 0;
    width: 80%;
  }
`;

export const TextBold = styled('b')`
  color: #274765;
`;
