import styled from 'styled-components';

export const MainWrapper = styled.main`
  height: calc(100% - 160px);
  overflow-y: auto;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);

  @media (max-width: 991px) {
    background-size: 100% 393px;
    height: calc(100% - 120px);
  }

  @media (max-width: 768px) {
    background-size: 100% 393px;
    height: calc(100% - 185px);
  }
`;
