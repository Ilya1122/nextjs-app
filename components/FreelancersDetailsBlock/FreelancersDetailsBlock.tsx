import Link from 'next/link';
import {
  UserInfoBlock, UserName, TextDescription, ContactButton, Image,
} from './styles';

interface IFreelancersDetailsBlock {
  avatar: string,
  name: string,
  id: number,
  description: string | null;
}

const FreelancersDetailsBlock: React.FC<IFreelancersDetailsBlock> = ({
  avatar, name, id, description,
}) => (
  <>
    <Image
      alt="avatar"
      src={avatar}
    />

    <UserInfoBlock>
      <UserName>{name}</UserName>

      <TextDescription>
        {description}
      </TextDescription>

      <Link href={`https://my.honf.ru/login?freelancerId=${id}`} passHref>
        <ContactButton>Связаться</ContactButton>
      </Link>
    </UserInfoBlock>
  </>
);

export default FreelancersDetailsBlock;
