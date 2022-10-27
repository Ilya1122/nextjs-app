import styled from 'styled-components';
import { Box } from '@mui/material';

export const FooterCard = styled(Box)`
  display: flex;
  border-top: 1px solid#E3E6EC;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;

  @media (max-width: 1200px) {
    padding: 20px;
    justify-content: space-between;
  }

  @media (max-width: 905px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterLeftBox = styled(Box)`
  display: flex;
  margin-right: 100px;

  @media (max-width: 1200px) {
    margin-right: 0;
  }

  @media (max-width: 905px) {
    margin-bottom: 16px;
  }
`;

export const FooterRightBox = styled(Box)`
  display: flex;
`;

export const IconBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(39, 71, 101, 0.06);
`;

export const TitleFooterText = styled(Box)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
`;

export const SubTitleFooterText = styled(Box)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #848484;
`;

export const TextBox = styled(Box)`
  margin-left: 19px;
  display: flex;
  flex-direction: column;
`;
