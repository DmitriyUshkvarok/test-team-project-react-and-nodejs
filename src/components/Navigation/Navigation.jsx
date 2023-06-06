import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import { BoxNavigation } from './Navigation.styled';

const Navigation = () => {
  return (
    <BoxNavigation>
      <Nav />
      <UserNav />
      <AuthNav />
    </BoxNavigation>
  );
};

export default Navigation;
