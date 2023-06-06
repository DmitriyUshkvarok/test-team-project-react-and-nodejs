import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { StyledHeader } from './SharedLayout.styled';
import Logo from '../Logo/Logo';

const SharedLayout = () => {
  return (
    <>
      <header>
        <StyledHeader>
          <Logo />
          <Header />
        </StyledHeader>
        <BurgerMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
