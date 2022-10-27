import Image from 'next/image';
import { IPlatformAdvantages, IItemPlatform } from '../interface';
import { Container, BoxImage, Text } from './styles';

const AboutUsCustomersList: React.FC<IPlatformAdvantages> = ({
  platformCustomers, widthitemtext,
}) => (
  <>
    {platformCustomers.map(({ id, text, icon }: IItemPlatform) => (
      <Container key={id}>
        <BoxImage>
          <Image src={icon} width={32} height={32} quality={100} alt="icon" />
        </BoxImage>
        <Text widthitemtext={widthitemtext}>{text}</Text>
      </Container>
    ))}
  </>
);

export default AboutUsCustomersList;
