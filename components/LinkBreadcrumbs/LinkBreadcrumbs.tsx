import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs, Stack } from '@mui/material';
import { StyledLink, ActiveLink, Container } from './styles';

interface ILinkBreadcrumbs {
  nameActiveLink: string,
  generalLink?: string
  generalPath?: string,
  spacesBootom?: number,
}

const LinkBreadcrumbs: React.FC<ILinkBreadcrumbs> = ({
  nameActiveLink, generalLink, generalPath, spacesBootom,
}) => {
  const breadcrumbs = [
    <StyledLink key={1}>
      <Link href={generalPath || '/'} passHref>
        {generalLink || 'Главная'}
      </Link>
    </StyledLink>,
    <ActiveLink key={2}>
      {nameActiveLink}
    </ActiveLink>,
  ];

  return (
    <Container spacesBootom={spacesBootom}>
      <Stack>
        <Breadcrumbs
          separator={<Image src="/icons/arrovRightIcon.svg" width={18} height={18} />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Container>
  );
};

export default LinkBreadcrumbs;
