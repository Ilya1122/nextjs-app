import { TERMS_PATH, PRIVACY_POLICY_PATH } from 'utils/constants/routes';
import { LINK_TWITTER, LINK_FACEBOOK, LINK_INSTAGRAM } from 'utils/constants/links';

export const footerLink = [
  {
    path: TERMS_PATH, text: 'Условия использования', id: 1,
  },
  {
    path: PRIVACY_POLICY_PATH, text: 'Политика конфиденциальности', id: 2,
  },
];

export const footerIconLink = [
  {
    path: LINK_TWITTER, img: '/icons/twiterIcon.svg', id: 1,
  },
  {
    path: LINK_FACEBOOK, img: '/icons/facebookIcon.svg', id: 2,
  },
  {
    path: LINK_INSTAGRAM, img: '/icons/instagramIcon.svg', id: 3,
  },
];
