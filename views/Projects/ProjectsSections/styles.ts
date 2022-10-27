import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
