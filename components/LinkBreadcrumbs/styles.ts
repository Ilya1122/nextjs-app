import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

interface IContainer {
  spacesBootom?: number,
}

export const Container = styled(Box)<IContainer>`
  display: flex;
  margin-top: 40px;
  margin-bottom: ${({ spacesBootom }) => spacesBootom || 0}px;

  @media (max-width: 991px) {
    margin-top: 14px;
  }
`;

export const StyledLink = styled('span')`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #282828;
  text-decoration: none;
  a {
    color: inherit;
  }

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 23px;
  }
`;

export const ActiveLink = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #848484;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 23px;
  }
`;
