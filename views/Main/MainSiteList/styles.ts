import styled from 'styled-components';
import { Box, Link } from '@mui/material';

export const ContainerList = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 30px;

  @media (max-width: 991px) {
    padding: 0;
  }
`;

export const BoxLink = styled(Box)`
  height: 40px;
  width: fit-content;
  @media (max-width: 991px) {

    :nth-child(1) {
      margin-right: 31px;
    }
    :nth-child(2) {
      margin-right: 31px;
    }
    :nth-child(3) {
      margin-right: 31px;
    }
    :nth-child(4) {
      margin-right: 31px;
    }
  }
`;

export const LinkGoogle = styled(Link)`
  display: block;
  width: 122px;
  height: 40px;
  cursor: pointer;
  background: url(/icons/googlelogo.png);
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background: url(/icons/googleLogoActive.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const LinkSlack = styled(Link)`
  display: block;
  width: 145px;
  height: 37px;
  background: url(/icons/slackLogo.png);
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background: url(/icons/slackLogoActive.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const LinkUdemy = styled(Link)`
  display: block;
  width: 148px;
  height: 43px;
  background: url(/icons/udemyLogo.png);
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background: url(/icons/udemyLogoActive.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const LinkMicrosoft = styled(Link)`
  display: block;
  width: 171px;
  height: 36px;
  background: url(/icons/microsoftLogo.png);
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background: url(/icons/microsoftLogoActive.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const LinkDyson = styled(Link)`
  display: block;
  width: 115px;
  height: 44px;
  background: url(/icons/dysonLogo.png);
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background: url(/icons/dysonLogoActive.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
