import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  max-width: 351px;
  cursor: pointer;
  height: fit-content;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BoxTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 10px;
  border-bottom: 1px solid #E3E6EC;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #282828;

  @media (max-width: 700px) {
    width: 70%;
    overflow: hidden;
    max-width: 165px;
    height: 24px;
  }
`;

export const BoxCount = styled(Box)`
  display: flex;
  align-items: center;
`;

export const CountText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
  margin-right: 6px;
`;

export const TextDescription = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
  padding: 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
