import React from 'react';
import { IFreelancer } from 'interfaces/freelancer';
import TablePagination from 'components/UI/Pagination';
import FreelancersCard from '../FreelancersCard';
import { Container } from './styles';

interface ListFreelancersProps {
  data: IFreelancer[];
}

const ListFreelancers: React.FC<ListFreelancersProps> = ({
  data = [],
}) => (
  <Container>
    {data.map((freelancer) => (
      <FreelancersCard
        key={freelancer.id}
        {...freelancer}
      />
    ))}
    <TablePagination isCountRecords />
  </Container>
);

export default ListFreelancers;
