import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import {
  BoxNav,
  StyledHeaderBurger,
  StyledBurger,
  Menu,
  BoxAuth,
  BoxAuthNav,
} from './BurgerMenu.styled';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  /**
   * test login
   */
  const [login, setLogin] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setLogin(!login);
    console.log(isOpen);
  };

  return (
    <>
      <StyledHeaderBurger>
        <Logo />
        <BoxNav>
          <Nav />
        </BoxNav>
        <BoxAuthNav> {login ? <UserNav /> : <AuthNav />}</BoxAuthNav>

        <StyledBurger isOpen={isOpen} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </StyledHeaderBurger>
      <Menu isOpen={isOpen} onClick={toggleMenu}>
        <BoxAuth>{login ? <UserNav /> : <AuthNav />}</BoxAuth>

        <Nav />
      </Menu>
    </>
  );
};
export default BurgerMenu;
