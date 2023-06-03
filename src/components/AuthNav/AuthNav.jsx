import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">RegisterPage</NavLink>

      <NavLink to="/login">LoginPage</NavLink>
    </>
  );
};
export default AuthNav;
