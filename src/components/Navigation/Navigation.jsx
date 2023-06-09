import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import {
  BoxNavigation,
  LogoWrapper,
  NavWrapper,
  UserNavWrapper,
  AuthNavWrapper,
  BurgerWrapper,
} from './Navigation.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <BoxNavigation>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      {isLoggedIn ? (
        <UserNavWrapper>
          <UserNav />
        </UserNavWrapper>
      ) : (
        <AuthNavWrapper>
          <AuthNav />
        </AuthNavWrapper>
      )}
      <BurgerWrapper>
        <BurgerMenu />
      </BurgerWrapper>
    </BoxNavigation>
  );
};

export default Navigation;
