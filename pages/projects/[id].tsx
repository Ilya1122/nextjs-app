import { NextPage } from 'next';
import Head from 'next/head';
import { PROJECTS_PATH } from 'utils/constants/routes';
import { WrapperFixed } from 'components/Wrappers';
import LinkBreadcrumbs from 'components/LinkBreadcrumbs';
import { itemProjects } from 'views/Projects/constants';
import ProjectCard from 'views/Projects/ProjectCard';
import { LINK_PROJECT_ID_LOGIN } from 'utils/constants/links';

const ProjectsDetails: NextPage = () => (
  <>
    <Head>
      <title>honf.ru - Проект</title>
    </Head>
    <WrapperFixed spacesBootom={40}>
      <LinkBreadcrumbs
        nameActiveLink={itemProjects.titleProject}
        generalLink="Все проекты"
        generalPath={PROJECTS_PATH}
        spacesBootom={26}
      />

      <ProjectCard {...itemProjects} buttonText="Откликнуться" buttonLink={LINK_PROJECT_ID_LOGIN} fulltext="inherit" />
    </WrapperFixed>
  </>
);

export default ProjectsDetails;
