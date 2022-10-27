import TablePagination from 'components/UI/Pagination';
import { PROJECTS_PATH } from 'utils/constants/routes';
import ProjectCard from '../ProjectCard';
import { dataProjects } from '../constants';
import { IProjectCard } from '../interface';
import { Container } from './styles';

const ProjectsSections: React.FC = () => (
  <Container>
    {dataProjects.map((item: IProjectCard) => (
      <ProjectCard key={item.id} {...item} buttonText="Подробнее" buttonLink={PROJECTS_PATH} />
    ))}
    <TablePagination isCountRecords />
  </Container>
);

export default ProjectsSections;
