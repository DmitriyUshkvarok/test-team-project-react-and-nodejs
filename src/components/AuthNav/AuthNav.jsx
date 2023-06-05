import { StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Registration</StyledLink>
    </div>
  );
};
export default AuthNav;
