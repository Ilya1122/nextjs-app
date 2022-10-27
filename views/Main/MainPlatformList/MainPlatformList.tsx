import Image from 'next/image';
import { MainTitlePlatfotmItem, MainTitlePlatfotmItemSilver } from 'components/UI/Typography';
import { platformAdvantages } from '../constants';
import { BoxItem, BoxText, BoxIcon } from './styles';

const MainPlatformList: React.FC = () => (
  <>
    {platformAdvantages.map((item) => (
      <BoxItem key={item.title}>
        <BoxIcon>
          <Image src={item.img} width={45} height={45} quality={100} alt="iconPlatform" />
        </BoxIcon>
        <BoxText>
          <MainTitlePlatfotmItem>
            {item.title}
          </MainTitlePlatfotmItem>
          <MainTitlePlatfotmItemSilver>
            {item.description}
          </MainTitlePlatfotmItemSilver>
        </BoxText>
      </BoxItem>
    ))}
  </>
);

export default MainPlatformList;
