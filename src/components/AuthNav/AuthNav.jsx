import { StyledLink, BoxAuth } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <BoxAuth>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Registration</StyledLink>
    </BoxAuth>
  );
};
export default AuthNav;
