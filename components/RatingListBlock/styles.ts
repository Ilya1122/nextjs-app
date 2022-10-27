import styled from 'styled-components';
import { Box } from '@mui/material';

interface IContainer {
  maxWidth?: string,
  spacesRight?: string,
}

export const Container = styled(Box)<IContainer>`
  display: flex;
  flex-direction: column;
  background: #FAFBFD;
  border-radius: 14px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '770px'};
  padding: 40px 40px 17px 40px;

  @media (max-width: 1200px) {
    margin-right: ${(({ spacesRight }) => spacesRight || '30px')};
  }

  @media (max-width: 900px) {
   max-width: 100%;
  }

  @media (max-width: 640px) {
    padding: 24px 24px 8px 24px;
  }
`;

export const BoxRating = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 640px) {
   flex-direction: column-reverse;
   align-items: flex-start;
  }

  :nth-child(2) {
    span:first-child {
      background-color: rgba(242, 80, 62, 0.1);
      span {
        background-color: #FB7373;
      }
    }
    div:first-child {
      color: #F84142;
    }
  }
  :nth-child(3) {
    span:first-child {
      background-color: rgba(252, 215, 135, 0.2);
      span {
        background-color: #FFDC8E;
      }
    }
    div:first-child {
      color: #EFC363;
    }
  }
  :nth-child(4) {
    span:first-child {
      background-color: rgba(110, 204, 250, 0.2);
      span {
        background-color: #6ECCFA;
      }
    }
    div:first-child {
      color: #58B5E2;
    }
  }
  :nth-child(5) {
    span:first-child {
      background-color: rgba(56, 217, 101, 0.2);
      span {
        background-color: #95EBAD;
      }
    }
    div:first-child {
      color: #6ABF82;
    }
  }
  :nth-child(6) {
    span:first-child {
      background-color: rgba(79, 149, 231, 0.2);
      span {
        background-color: #7DB4F3;
      }
    }
    div:first-child {
      color: #317CD4;
    }
  }
  :nth-child(7) {
    span:first-child {
      background-color: rgba(240, 75, 183, 0.2);
      span {
        background-color: #EB93CD;
      }
    }
    div:first-child {
      color: #D77FB9;
    }
  }
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

export const TitleProgress = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  margin-left: 26px;
  display: flex;

  @media (max-width: 1200px) {
    width: 206px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 23px;
  }

  @media (max-width: 640px) {
    margin-left: 0;
  }
`;

export const TextPercent = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #F84142;
  margin-left: 3px;

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 23px;
  }
`;
