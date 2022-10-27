import React, { useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import TitleSubTitleBlock from 'components/TitleSubTitleBlock';
import FilterBlock from 'components/FilterBlock';
import MobileFilter from 'components/MobileFilter';
import ListFreelancers from 'views/Freelancers/ListFreelancers';
import { API } from 'services/api';
import { IFreelancer } from 'interfaces/freelancer';

interface Props {
  count: number;
  freelancers: IFreelancer[];
}

const Freelancers: NextPage<Props> = ({ freelancers, count }) => {
  const [openMobileFilters, setOpenMobileFilters] = useState<boolean>(false);

  const changeOpenAccordion = () => setOpenMobileFilters((prev: boolean) => !prev);

  return (
    <>
      <Head>
        <title>honf.ru - Исполнители</title>
      </Head>
      <TitleSubTitleBlock
        title="Исполнители"
        subTitle={`${count} активных исполнителей`}
      />

      <FilterBlock />
      <MobileFilter changeOpenAccordion={changeOpenAccordion} open={openMobileFilters} />

      <ListFreelancers
        data={freelancers}
      />
    </>
  );
};

export default Freelancers;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await API.get<{ count: number; freelancers: IFreelancer[]}>('/freelancers?page=1&items=10');

  return {
    props: {
      count: data.count,
      freelancers: data.freelancers,
    },
  };
};
