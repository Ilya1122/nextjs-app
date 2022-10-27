import LinkBreadcrumbs from 'components/LinkBreadcrumbs';
import { TitlePage, WrapperFixed } from './styles';

interface ITitleBreadcrumbsBlock {
  nameActiveLink: string,
  title: string;
  marginTop: number;
  isLink?: boolean;
  isTitle?: boolean;
}

const TitleBreadcrumbsBlock: React.FC<ITitleBreadcrumbsBlock> = ({
  children, nameActiveLink, title, marginTop, isLink,
}) => (
  <WrapperFixed>
    {isLink && (
      <LinkBreadcrumbs nameActiveLink={nameActiveLink} />
    )}
    <TitlePage marginTop={marginTop}>{title}</TitlePage>
    {children}
  </WrapperFixed>
);

export default TitleBreadcrumbsBlock;
