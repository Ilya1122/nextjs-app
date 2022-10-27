import Link from 'next/link';
import { DarkButton } from 'components/UI/Button';
import { FAQ_PATH } from 'utils/constants/routes';
import { LINK_LOGIN, LINK_REGISTRATION } from 'utils/constants/links';
import { Container } from './styles';

export const buttonLinks = [
  {
    path: FAQ_PATH, text: 'FAQ', id: 1,
  },
  {
    path: LINK_LOGIN, text: 'Войти в аккаунт', id: 2,
  },
  {
    path: LINK_REGISTRATION, text: 'Регистрация', id: 3,
  },
];

interface HeaderButtonsProps {
  isLight?: boolean;
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ isLight }) => (
  <Container>
    {buttonLinks.map((link) => (
      <Link key={link.id} href={link.path} passHref>
        <DarkButton $isLight={isLight} variant="contained">
          {link.text}
        </DarkButton>
      </Link>
    ))}
  </Container>
);

export default HeaderButtons;
