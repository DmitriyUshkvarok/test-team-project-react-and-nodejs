import { Outlet } from 'react-router-dom';
// import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
// import { LogoLink, Chip } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        {/* <LogoLink to="/">
          pe<Chip>t</Chip>ly
        </LogoLink> */}
        {/* <Header /> */}

        <BurgerMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
