import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 25px 0px;
  background-color: ${({ theme }) => theme.pallette.mainWhite};
  border-top: 1px solid rgba(227, 230, 236, 1);

  @media (max-width: 991px) {
    padding: 15px 0px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;

    & :nth-child(1) {
      order: 2;
    }

    & :nth-child(2) {
      order: 1;
    }
    & :nth-child(3) {
      order: 2;
    }
  }
`;

export const FooterLeftContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 126px;
  height: 27px;

  @media (max-width: 991px) {
    width: 100px;
    height: 22px;
  }
`;
