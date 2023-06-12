import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import {
  ConfirmPageSection,
  LogoContainer,
  ConfirmTitle,
  ConfirmDescription,
  LoginLink,
  ResendEmail,
  ResendSpan,
} from './ConfirmEmailPage.styled';

const ConfirmEmailPage = () => {
  return (
    <ConfirmPageSection>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ConfirmTitle>
        A registration confirmation email has been sent to your mailing address
      </ConfirmTitle>
      <ConfirmDescription>
        If you do not see the registration confirmation message check your spam
        or resend the request
      </ConfirmDescription>
      <LoginLink>
        <NavLink to="/login" style={{ color: 'var(--skyColor)' }}>
          After confirming your registration, please log in to your account
        </NavLink>
      </LoginLink>
      <ResendEmail>
        didnt receive the registration confirmation email?
        <ResendSpan>Resend it</ResendSpan>
      </ResendEmail>
    </ConfirmPageSection>
  );
};

export default ConfirmEmailPage;
