import styled from 'styled-components';
import { Box } from '@mui/material';

interface IWrapperSlider {
  height?: number
}

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const WrapperSlider = styled(Box)<IWrapperSlider>`
  width: 100%;
  border-radius: 14px;
  background: #FAFBFD;
  height: ${({ height }) => height || 520}px;
  padding: 40px 35px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 24px;
    height: fit-content;
  }
`;

export const HeaderPortfolio = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
  align-items: center;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #282828;

  @media (max-width: 700px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ArrowBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const BoxArrovRight = styled(Box)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const BoxArrovLeft = styled(Box)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
