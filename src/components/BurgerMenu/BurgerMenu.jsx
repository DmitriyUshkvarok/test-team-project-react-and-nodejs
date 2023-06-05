import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import {
  Chip,
  LogoLink,
  BoxNav,
  StyledHeaderBurger,
  StyledBurger,
  Box,
  BoxAuth,
  BoxAuthNav,
} from './BurgerMenu.styled';
import { useState } from 'react';

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
        <LogoLink to="/">
          pe<Chip>t</Chip>ly
        </LogoLink>
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
      <Box isOpen={isOpen}>
        <BoxAuth> {login ? <UserNav /> : <AuthNav />}</BoxAuth>

        <Nav />
      </Box>
    </>
  );
};
export default BurgerMenu;
