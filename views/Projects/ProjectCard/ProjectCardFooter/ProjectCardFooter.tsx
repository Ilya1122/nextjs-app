import Image from 'next/image';
import Link from 'next/link';
import {
  FooterCard, BoxInfoItem, InfoItem, BoxIcon, TextBlock, InfoTitle, InfoSubTitle, ActionButton,
} from './styles';

interface IProjectCardFooter {
  userName: string,
  location: string,
  price: number,
  id: number,
  buttonText?: string,
  buttonLink: string,
}

const ProjectCardFooter: React.FC<IProjectCardFooter> = ({
  userName, location, price, id, buttonText, buttonLink,
}) => (
  <FooterCard>
    <BoxInfoItem>
      <Link href="/customers/1" passHref>
        <InfoItem>
          <BoxIcon>
            <Image src="/icons/profileIconBlue.svg" width={20} height={20} alt="icon" />
          </BoxIcon>
          <TextBlock>
            <InfoTitle>
              {userName}
            </InfoTitle>
            <InfoSubTitle>
              Заказчик
            </InfoSubTitle>
          </TextBlock>
        </InfoItem>
      </Link>
      <InfoItem>
        <BoxIcon>
          <Image src="/icons/profileIconBlue.svg" width={20} height={20} alt="icon" />
        </BoxIcon>
        <TextBlock>
          <InfoTitle>
            {location}
          </InfoTitle>
          <InfoSubTitle>
            Местоположение
          </InfoSubTitle>
        </TextBlock>
      </InfoItem>
      <InfoItem>
        <BoxIcon>
          <Image src="/icons/profileIconBlue.svg" width={20} height={20} alt="icon" />
        </BoxIcon>
        <TextBlock>
          <InfoTitle>
            {price} руб.
          </InfoTitle>
          <InfoSubTitle>
            Фиксированная цена
          </InfoSubTitle>
        </TextBlock>
      </InfoItem>
    </BoxInfoItem>
    <Link href={`${buttonLink}${id}`} passHref>
      <ActionButton>
        {buttonText}
      </ActionButton>
    </Link>
  </FooterCard>
);

export default ProjectCardFooter;
