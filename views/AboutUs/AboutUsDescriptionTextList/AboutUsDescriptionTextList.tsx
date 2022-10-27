import {
  Container, BoxItem, BoxEllipse, Ellipse, TextItem, TextBold,
} from './styles';

const AboutUsDescriptionTextList: React.FC = () => (
  <Container>
    <BoxItem>
      <BoxEllipse>
        <Ellipse />
      </BoxEllipse>
      <TextItem>
        Рейтинг исполнителя <TextBold>не зависит от платного тарифа</TextBold> на платформе
      </TextItem>
    </BoxItem>
    <BoxItem>
      <BoxEllipse>
        <Ellipse />
      </BoxEllipse>
      <TextItem>
        Рейтинг выражается <TextBold>общим составным баллом</TextBold> из нескольких показателей
      </TextItem>
    </BoxItem>
    <BoxItem>
      <BoxEllipse>
        <Ellipse />
      </BoxEllipse>
      <TextItem>
        Помимо основного рейтинга можно получать <TextBold>дополнительные награды</TextBold>
      </TextItem>
    </BoxItem>
    <BoxItem>
      <BoxEllipse>
        <Ellipse />
      </BoxEllipse>
      <TextItem>
        Уверенность в <TextBold>честно заработанном рейтинге</TextBold> фрилансера
      </TextItem>
    </BoxItem>
  </Container>
);

export default AboutUsDescriptionTextList;
