import React from 'react';
import Image from 'next/image';
import { freelancerSelectItem, freelancerInputItem } from 'views/Freelancers/constants';
import FilterFormInputGroup from 'components/FilterFormInputGroup';
import FilterFormInput from 'components/FilterFormInput';
import {
  Container, Wrapper, WrapperForm, SearchButton, ContainerButton, ButtonDiscard, WrapperGroup,
} from './styles';

interface IFilterBlock {
  spacesTop?: number;
}

const FilterBlock: React.FC<IFilterBlock> = ({ spacesTop }) => (
  <Container spacesTop={spacesTop}>
    <Wrapper>
      <WrapperForm>
        <WrapperGroup>
          <FilterFormInput
            title="Категория"
            data={freelancerSelectItem}
            spaceRight={20}
          />
          <FilterFormInputGroup
            title="Рейтинг %"
            dataInputs={freelancerInputItem}
          />
        </WrapperGroup>
        <WrapperGroup>
          <FilterFormInput
            title="Сортировка"
            data={freelancerSelectItem}
            spaceRight={20}
          />
          <FilterFormInput title="Ключевое слово" spaceRight={15} />
          <SearchButton>
            <Image src="/icons/searchIcon.svg" width={24} height={24} quality={100} alt="search" />
          </SearchButton>
        </WrapperGroup>
      </WrapperForm>
    </Wrapper>
    <ContainerButton>
      <Wrapper>
        <ButtonDiscard
          endIcon={(
            <Image src="/icons/closeIcon.svg" width={20} height={20} quality={100} alt="close" />
          )}
        >
          Сбросить все фильтры
        </ButtonDiscard>
      </Wrapper>
    </ContainerButton>
  </Container>
);

export default FilterBlock;
