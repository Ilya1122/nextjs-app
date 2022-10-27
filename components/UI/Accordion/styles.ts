import styled from 'styled-components';
import {
  Accordion, AccordionSummary, AccordionDetails, Box,
} from '@mui/material/';

export const AcordionContainer = styled(Box)`
  margin-top: 30px;
  width: 100%;
`;

export const AccordionBox = styled(Accordion)`
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: none;
  border: 1px solid #E3E6EC;
  padding: 0;
  &::before {
    display: none;
  }
`;

export const AccordionHeader = styled(AccordionSummary)`
  padding: 0 26px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;

export const TitleAcordion = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #282828;

  @media (max-width: 991px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const AccordionDetail = styled(AccordionDetails)`
  border-top: 1px solid #E3E6EC;
  padding: 18px 26px;
`;

export const AccordionDetailText = styled('p')`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
`;
