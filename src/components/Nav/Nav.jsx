import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to="/news">News</NavLink>

        <NavLink to="/notices">Notices Page</NavLink>

        <NavLink to="/friends">Our Friends</NavLink>
      </nav>
    </>
  );
};

export default Nav;
