import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import { BoxNavigation } from './Navigation.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <BoxNavigation>
      <Logo />

      <Nav />
      <UserNav />
      <AuthNav />
      <BurgerMenu />
    </BoxNavigation>
  );
};

export default Navigation;
