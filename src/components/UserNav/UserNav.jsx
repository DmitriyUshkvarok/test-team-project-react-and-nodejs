import { UserLink, Chip } from './UserNav.styled';
import { MdAccountCircle } from 'react-icons/md';

const UserNav = () => {
  return (
    <>
      <UserLink to="/user">
        <Chip>
          <MdAccountCircle />
        </Chip>
        Account
      </UserLink>
    </>
  );
};
export default UserNav;
