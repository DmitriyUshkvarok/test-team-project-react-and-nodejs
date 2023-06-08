import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { StyledHeader } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
