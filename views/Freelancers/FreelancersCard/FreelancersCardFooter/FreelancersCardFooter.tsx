import Image from 'next/image';
import {
  FooterCard, FooterLeftBox, FooterRightBox, IconBox,
  TitleFooterText, SubTitleFooterText, TextBox,
} from './styles';

interface IFreelancersCardFooter {
  location: string,
  countOrders: number,
}

const FreelancersCardFooter: React.FC<IFreelancersCardFooter> = ({ location, countOrders }) => (
  <FooterCard>
    <FooterLeftBox>
      <IconBox>
        <Image
          alt="starIcon"
          src="/icons/locationIcon.svg"
          quality={100}
          width={20}
          height={20}
        />
      </IconBox>
      <TextBox>
        <TitleFooterText>
          {location}
        </TitleFooterText>
        <SubTitleFooterText>
          Местоположение
        </SubTitleFooterText>
      </TextBox>
    </FooterLeftBox>
    <FooterRightBox>
      <IconBox>
        <Image
          alt="starIcon"
          src="/icons/checkIcon.svg"
          quality={100}
          width={24}
          height={24}
        />
      </IconBox>
      <TextBox>
        <TitleFooterText>
          {countOrders}
        </TitleFooterText>
        <SubTitleFooterText>
          Выполнено заказов
        </SubTitleFooterText>
      </TextBox>
    </FooterRightBox>
  </FooterCard>
);

export default FreelancersCardFooter;
