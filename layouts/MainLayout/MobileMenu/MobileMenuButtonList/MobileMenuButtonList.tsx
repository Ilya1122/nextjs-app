import Link from 'next/link';
import { mobileMenuButtonLink } from '../constants';
import { Container, ButtonLink } from './styles';

const MobileMenuButtonList: React.FC = () => (
  <Container>
    {mobileMenuButtonLink.map((item) => (
      <Link href={item.link} passHref key={item.title}>
        <ButtonLink>
          {item.title}
        </ButtonLink>
      </Link>
    ))}
  </Container>
);

export default MobileMenuButtonList;
