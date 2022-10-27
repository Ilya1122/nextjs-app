import styled from 'styled-components';
import {
  Accordion, AccordionSummary, AccordionDetails, Box, Button,
} from '@mui/material/';

export const AcordionContainer = styled(Box)`
  width: 100%;
  margin: 22px 0;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const AccordionBox = styled(Accordion)`
  margin-bottom: 16px;
  box-shadow: none;
  border-top: 1px solid #E3E6EC;
  border-bottom: 1px solid #E3E6EC;
  padding: 0;
  &::before {
    display: none;
  }
`;

export const AccordionHeader = styled(AccordionSummary)`
  padding: 0 20px;
  box-sizing: border-box;
  background: #EDF0F4;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;

export const TitleAcordionBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const TitleAcordion = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #282828;
`;

export const AccordionDetail = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background: #F4F6FA;
`;

export const ContainerReset = styled(Box)`
  width: 100%;
  height: 80px;
  background: #FAFBFD;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #E3E6EC;
  margin-top: 20px;
`;

export const ButtonReset = styled(Button)`
  background-color: rgba(39, 71, 101, 0.06);
  height: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #274765;
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  max-width: 196px;
  justify-content: center;
  text-transform: inherit;
  &:hover {
    background: #274765;
    color: #ffffff;
  }
  &:active {
    background: #1D3D5B;
    color: #ffffff;
  }
`;
