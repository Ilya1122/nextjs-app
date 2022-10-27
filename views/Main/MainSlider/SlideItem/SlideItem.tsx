import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS_PATH } from 'utils/constants/routes';
import { SlideItemButton } from 'components/UI/Button';
import {
  TitleSlideItem, SubTitleSlidePrice, TitleSlidePrice, DescSlideText,
} from 'components/UI/Typography';
import {
  ContainerItem, ContainerButton, BoxButton, BoxPrice, BoxPriceText, BoxPriceIcon,
} from './styles';

interface ItemProps {
  item: {
    title: string,
    price: string,
    priceType: string,
    deckription: string,
    id: number,
  }
}

const SlideItem: React.FC<ItemProps> = ({ item }) => (
  <Link href={`${PROJECTS_PATH}${item.id}`} passHref>
    <ContainerItem>
      <ContainerButton>
        <BoxButton>
          SMM
        </BoxButton>
        <BoxButton>
          AD
        </BoxButton>
        <BoxButton>
          Instagram
        </BoxButton>
      </ContainerButton>
      <TitleSlideItem>{item.title}</TitleSlideItem>
      <BoxPrice>
        <BoxPriceIcon>
          <Image
            alt="priceIcon"
            src="/icons/financeIcon.svg"
            quality={100}
            width={20}
            height={20}
          />
        </BoxPriceIcon>
        <BoxPriceText>
          <TitleSlidePrice>{item.price} руб.</TitleSlidePrice>
          <SubTitleSlidePrice>{item.priceType}</SubTitleSlidePrice>
        </BoxPriceText>
      </BoxPrice>
      <DescSlideText>
        {item.deckription}
      </DescSlideText>
      <SlideItemButton>Подробнее</SlideItemButton>
    </ContainerItem>
  </Link>
);

export default SlideItem;
