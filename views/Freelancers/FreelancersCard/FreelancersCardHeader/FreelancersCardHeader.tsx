import { useDefaultImg } from 'hooks/useDefaultImg';
import {
  HeaderCard, TextBox, NameUser, TypeUserBox, UserTypeText, UserTypeTextBlack, Image,
} from './styles';

interface IFreelancersCardHeader {
  photoUrl: string | null;
  userName: string;
  special: string | null;
}

const FreelancersCardHeader: React.FC<IFreelancersCardHeader> = ({
  photoUrl,
  userName,
  special,
}) => {
  const { imageOnLoadHandler, imageOnErrorHandler } = useDefaultImg();

  return (
    <HeaderCard>
      <Image
        alt="avatar"
        src={photoUrl!}
        onLoad={imageOnLoadHandler}
        onError={imageOnErrorHandler}
      />
      <TextBox>
        <NameUser>
          {userName}
        </NameUser>
        <TypeUserBox>
          <UserTypeText>
            Специализация:
          </UserTypeText>
          <UserTypeTextBlack>
            {special}
          </UserTypeTextBlack>
        </TypeUserBox>
      </TextBox>
    </HeaderCard>
  );
};

export default FreelancersCardHeader;
