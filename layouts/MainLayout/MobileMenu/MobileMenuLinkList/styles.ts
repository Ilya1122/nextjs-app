import styled from 'styled-components';
import { Box } from '@mui/material';

interface ILinkText {
  active: boolean,
}

export const LinkBox = styled(Box)`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #E3E6EC;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5 ease;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const LinkText = styled(Box)<ILinkText>`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: ${(({ active }) => (active ? '#E22813' : '#282828'))};
`;
