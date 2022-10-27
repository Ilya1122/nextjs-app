import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

export const UserInfoBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 36px 0 0 40px;

  @media (max-width: 600px) {
    margin: 20px 0 0 0;
  }

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const UserName = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #282828;
  margin-bottom: 8px;
`;

export const TextDescription = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;
  width: 100%;
  max-width: 432px;

  @media (max-width: 1100px) {
    max-width: 539px;
  }
`;

export const ContactButton = styled(Button)`
  height: 50px;
  width: 100%;
  max-width: 195px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  background-color: rgba(39, 71, 101, 0.06);
  border-radius: 10px;
  color: #274765;
  text-transform: inherit;
  margin-top: 24px;

  &:hover {
    background: #274765;
    color: #ffffff;
  }

  &:active {
    background: #1D3D5B;
    color: #ffffff;
  }

  @media (max-width: 700px) {
    margin: 16px auto;
  }

  @media (max-width: 600px) {
    max-width: 280px;
  }
`;

export const Image = styled.img`
  width: 284px;
  height: 284px;

  @media (max-width: 600px) {
    width: 100%;
    height: 210px;
  }
`;
