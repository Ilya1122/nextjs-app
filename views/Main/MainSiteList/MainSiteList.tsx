import {
  ContainerList, LinkGoogle, LinkSlack, LinkUdemy, LinkMicrosoft, LinkDyson, BoxLink,
} from './styles';

const MainSiteList: React.FC = () => (
  <ContainerList>
    <BoxLink>
      <LinkGoogle target="_blank" href="https://www.google.com" rel="noreferrer" />
    </BoxLink>
    <BoxLink>
      <LinkSlack target="_blank" href="https://slack.com" rel="noreferrer" />
    </BoxLink>
    <BoxLink>
      <LinkUdemy target="_blank" href="https://www.udemy.com" rel="noreferrer" />
    </BoxLink>
    <BoxLink>
      <LinkMicrosoft target="_blank" href="https://www.microsoft.com" rel="noreferrer" />
    </BoxLink>
    <BoxLink>
      <LinkDyson target="_blank" href="https://service.dyson.com" rel="noreferrer" />
    </BoxLink>
  </ContainerList>
);

export default MainSiteList;
