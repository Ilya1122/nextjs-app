import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
