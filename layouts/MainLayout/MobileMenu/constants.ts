import { LINK_LOGIN, LINK_REGISTRATION } from 'utils/constants/links';

export const mobileMenuLink = [
  {
    title: 'Исполнители', link: '/freelancers',
  },
  {
    title: 'Проекты', link: '/projects',
  },
  {
    title: 'О нас', link: '/about-us',
  },
  {
    title: 'Контакты', link: '/contact',
  },
];

export const mobileMenuButtonLink = [
  {
    title: 'FAQ', link: '/faq',
  },
  {
    title: 'Войти в аккаунт', link: LINK_LOGIN,
  },
  {
    title: 'Регистрация', link: LINK_REGISTRATION,
  },
];
