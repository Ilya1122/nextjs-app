import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;

  @media (max-width: 1200px) {
    padding: 0 15px;
  }

  @media (max-width: 991px) {
    padding: 0 5px;
  }
`;
