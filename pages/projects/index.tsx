import React, { useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import ProjectsSections from 'views/Projects/ProjectsSections';
import TitleSubTitleBlock from 'components/TitleSubTitleBlock';
import FilterBlock from 'components/FilterBlock';
import MobileFilter from 'components/MobileFilter';

const Projects: NextPage = () => {
  const [openMobileFilters, setOpenMobileFilters] = useState<boolean>(false);

  const changeOpenAccordion = () => setOpenMobileFilters((prev: boolean) => !prev);

  return (
    <>
      <Head>
        <title>honf.ru - Исполнители</title>
      </Head>

      <TitleSubTitleBlock title="Все проекты" subTitle="1380 активных проектов" />

      <FilterBlock />
      <MobileFilter changeOpenAccordion={changeOpenAccordion} open={openMobileFilters} />

      <ProjectsSections />
    </>
  );
};

export default Projects;
