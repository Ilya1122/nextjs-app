import CustomerDetailsList from '../CustomerDetailsList';
import {
  Container, Wrapper, LeftBox, TextBox, TitleCompany, DescriptionText, RigntBox, Image,
} from './styles';

const CustomerInfoSection: React.FC = () => (
  <Container>
    <Wrapper>
      <LeftBox>
        <Image src="/images/defaultPhoto.svg" alt="avatar" />
        <TextBox>
          <TitleCompany>Very well Inc.</TitleCompany>
          <DescriptionText>
            В этом поле должен быть текст который исполнитель добавил как описание в настройках
            своего профиля. В этом поле должен быть текст который исполнитель добавил как
            описание в настройках своего профиля.
          </DescriptionText>
        </TextBox>
      </LeftBox>
      <RigntBox>
        <CustomerDetailsList />
      </RigntBox>
    </Wrapper>
  </Container>
);

export default CustomerInfoSection;
