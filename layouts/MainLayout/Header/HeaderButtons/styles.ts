import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 991px) {
    display: none;
  }
`;
