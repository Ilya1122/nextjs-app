import React from 'react';
import { Container, Title, SubTitle } from './styles';

interface TitleProps {
  spacesTop?: number,
  title: string,
  subTitle: string,
}

const TitleSubTitleBlock: React.FC<TitleProps> = ({ spacesTop, title, subTitle }) => (
  <Container>
    <Title spacesTop={spacesTop}>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </Container>
);

export default TitleSubTitleBlock;
