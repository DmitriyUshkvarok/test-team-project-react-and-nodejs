import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { toast } from 'react-toastify';
import {
  ConfirmPageSection,
  LogoContainer,
  ConfirmTitle,
  ConfirmDescription,
  LoginLink,
  ResendEmail,
  ResendSpan,
} from './ConfirmEmailPage.styled';
import { useVerifyUserMutation } from '../../redux/verifyApi/verifyApi';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelectors';

const ConfirmEmailPage = () => {
  const [verifyUser, { isLoading }] = useVerifyUserMutation();
  const email = useSelector(authSelector.getEmail);

  const handleResendEmail = async () => {
    try {
      await verifyUser(email);
      toast.success('Verification email resent successfully');
    } catch (error) {
      toast.error('Error resending verification email');
    }
  };

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
        <ResendSpan onClick={handleResendEmail}>
          {isLoading ? 'Loading...' : 'Resend it'}
        </ResendSpan>
      </ResendEmail>
    </ConfirmPageSection>
  );
};

export default ConfirmEmailPage;
