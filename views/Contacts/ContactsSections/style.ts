import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  @media (max-width: 1200px) {
    padding: 0 15px;
    flex-direction: column;
  }

  @media (max-width: 991px) {
    padding: 0 5px;
  }
`;
