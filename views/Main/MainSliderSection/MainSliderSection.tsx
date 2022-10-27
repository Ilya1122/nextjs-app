import { TitleSlider } from 'components/UI/Typography';
import MainSlider from '../MainSlider';
import { Container, BoxSlider } from './styles';

const MainSliderSection = () => (
  <Container>
    <TitleSlider>Последние проекты</TitleSlider>
    <BoxSlider>
      <MainSlider />
    </BoxSlider>
  </Container>
);

export default MainSliderSection;
