import styled from 'styled-components';
import { Box } from '@mui/material';

interface ITitle {
  spacesTop?: number;
}

export const Container = styled(Box)`
  width: 100%;
  max-width: 1200px;

  padding: 0 15px;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const Title = styled('h2')<ITitle>`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  color: #282828;
  margin-top: ${({ spacesTop }) => spacesTop || 38}px;
`;

export const SubTitle = styled(Box)<ITitle>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  margin-top: 6px;
`;
