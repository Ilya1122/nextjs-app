import ProjectCardFooter from './ProjectCardFooter';
import { IProjectCard } from '../interface';
import {
  Container, HeaderCard, HeaderButton, BodyCard, TitleCard, DateBlock, BlockText,
  TextSilver, TextBlack, Textdescription,
} from './styles';

interface ProjectCardProps extends IProjectCard {
  buttonText?: string;
  buttonLink: string;
  fulltext?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  userName, location, price, titleProject, date, countDay, id, buttonText, buttonLink, fulltext,
}) => (
  <Container>
    <HeaderCard>
      <HeaderButton>SMM</HeaderButton>
      <HeaderButton>AD</HeaderButton>
      <HeaderButton>Instagram</HeaderButton>
    </HeaderCard>

    <BodyCard>
      <TitleCard>
        {titleProject}
      </TitleCard>

      <DateBlock>
        <BlockText>
          <TextSilver>
            Размещен:
          </TextSilver>
          <TextBlack>
            {date}
          </TextBlack>
        </BlockText>
        <BlockText>
          <TextSilver>
            Срок выполнения:
          </TextSilver>
          <TextBlack>
            {'<'}{countDay} дней
          </TextBlack>
        </BlockText>
      </DateBlock>

      <Textdescription fulltext={fulltext}>
        Необходим специалист для ведения аккаунта Instagram/Facebook/VK Оформление
        страницы, разработка дизайна страницы, написание контент плана, проработка УТП,
        настройка рекламы, оформление страницы, разработка дизайна страницы, написание
        контент плана, проработка УТП, настройка рекламы, оформление страницы, разработка
      </Textdescription>
    </BodyCard>

    <ProjectCardFooter
      userName={userName}
      location={location}
      price={price}
      buttonText={buttonText}
      buttonLink={buttonLink}
      id={id}
    />
  </Container>
);

export default ProjectCard;
