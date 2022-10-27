import TitleBreadcrumbsBlock from 'components/TitleBreadcrumbsBlock';
import { TextDocument } from 'components/UI/Typography';
import AboutUsDescriptionTextList from '../AboutUsDescriptionTextList';
import { Container, BoxLeft } from './styles';

const AbutUsTopSection: React.FC = () => (
  <Container>
    <BoxLeft>
      <TitleBreadcrumbsBlock
        isLink
        nameActiveLink="О нас"
        title="Фриланс платформа с самым точным рейтингом"
        marginTop={68}
      />
      <TextDocument marginTop={16}>
        Задача организации, в особенности же постоянный количественный рост и сфера нашей
        активности играет важную роль в формировании форм развития.
        Повседневная практика показывает, что начало повседневной работы по формированию позиции
        требуют от нас анализа систем массового участия. Таким образом новая модель
        организационной деятельности играет важную роль в формировании соответствующий
        условий активизации. Товарищи! рамки и место обучения кадров играет важную роль в
        формировании дальнейших направлений развития.
      </TextDocument>
    </BoxLeft>
    <AboutUsDescriptionTextList />
  </Container>
);

export default AbutUsTopSection;
