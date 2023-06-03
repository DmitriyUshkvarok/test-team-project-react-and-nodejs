import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Logo</NavLink>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
