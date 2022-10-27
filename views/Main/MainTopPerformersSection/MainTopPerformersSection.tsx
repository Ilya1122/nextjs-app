import React from 'react';
import { IBestFreelancer } from 'interfaces/best-freelancer';
import { MainTitlePerformers } from 'components/UI/Typography';
import MainCardTopPerformers from '../MainCardTopPerformers';
import { ContainerCards, Container } from './styles';

interface Props {
  freelancers: IBestFreelancer[];
}

const MainTopPerformersSection: React.FC<Props> = ({ freelancers }) => (
  <Container>
    <MainTitlePerformers>Лучшие исполнители</MainTitlePerformers>
    <ContainerCards>
      {freelancers.map((freelancer) => (
        <MainCardTopPerformers
          key={freelancer.id}
          freelancer={freelancer}
        />
      ))}
    </ContainerCards>
  </Container>
);

export default MainTopPerformersSection;
