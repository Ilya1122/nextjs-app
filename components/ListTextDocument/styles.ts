import styled from 'styled-components';

interface IListBox {
  marginTop?: number,
}

export const ListBox = styled.ul`
  width: 100%;
  max-width: 1170px;
  margin-top: ${({ marginTop }: IListBox) => marginTop || 0}px;
`;

export const ListRow = styled.li`
  width: 100%;
  max-width: 1170px;
  display: flex;
  align-items: center;
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

export const IconListRow = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #E22813;
  margin-right: 10px;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 23px;
  }
`;
