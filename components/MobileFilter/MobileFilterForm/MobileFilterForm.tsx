import Image from 'next/image';
import FilterFormInputGroup from 'components/FilterFormInputGroup';
import FilterFormInput from 'components/FilterFormInput';
import { freelancerSelectItem, freelancerInputItem } from 'views/Freelancers/constants';
import { Container, ButtonFilter } from './styles';

const MobileFilterForm: React.FC = () => (
  <Container>
    <FilterFormInput
      title="Категория"
      data={freelancerSelectItem}
      spaceRight={20}
    />
    <FilterFormInputGroup
      title="Рейтинг %"
      dataInputs={freelancerInputItem}
    />
    <FilterFormInput
      title="Категория"
      data={freelancerSelectItem}
      spaceRight={20}
    />
    <FilterFormInput title="Ключевое слово" />
    <ButtonFilter>
      <Image src="/icons/searchIcon.svg" width={24} height={24} quality={100} alt="search" />
      Поиск
    </ButtonFilter>
  </Container>
);

export default MobileFilterForm;
