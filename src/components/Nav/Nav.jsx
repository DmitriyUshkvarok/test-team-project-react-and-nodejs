import { StyledLink, StyledNav } from './Nav.styled';

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/news">News</StyledLink>

      <StyledLink to="/notices">Find pet</StyledLink>

      <StyledLink to="/friends">Our Friends</StyledLink>
    </StyledNav>
  );
};

export default Nav;
