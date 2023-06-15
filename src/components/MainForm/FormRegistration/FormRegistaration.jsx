import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import handleAuthError from '../../../authError/authError';
import {
  StyleSectionFormRegistration,
  StyleFormRegistration,
  StyleRegistrTitle,
  StyleRegistrFormGroup,
  StyleFieldRegistr,
  BtnNextRegistration,
  StyleLinkOnLogin,
  StyleLink,
  StyleBtnRegister,
  StyleBtnBack,
  ToggleShowPasword,
  StyleErrorMessage,
  Error,
} from './FormRegistration.styled';
import Container from '../../Container/Container';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import authOperation from '../../../redux/auth/authOperation';

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
  location: '',
  phone: '',
};

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(3).max(20).required(),
    passwordConfirm: yup.string().min(3).max(20).required(),
    name: yup.string().min(4).max(20).required(),
    location: yup.string().required(),
    phone: yup.string().required(),
  });

  const toggleShowPassword = () => {
    setShowPassword((prewShowPassword) => !prewShowPassword);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    try {
      await dispatch(authOperation.register(values));
      navigate('/confirm-page');
      setSubmitting(false);
      toast.success(
        'A registration confirmation email has been sent to your email box! Check the spam section to see if the message is there'
      );
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNext = (values) => {
    let error = null;

    switch (step) {
      case 1:
        error = validateSchema(values, 'email');
        if (!error) {
          error = validateSchema(values, 'password');
        }
        if (!error) {
          error = validateSchema(values, 'passwordConfirm');
        }
        if (!error && values.password !== values.passwordConfirm) {
          error = "Passwords don't match";
        }
        break;
      default:
        break;
    }

    if (error) {
      toast.error(error);
      return;
    }

    setStep(step + 1);
  };

  const validateSchema = (values, fieldName) => {
    const fieldSchema = validationSchema.fields[fieldName];

    try {
      fieldSchema.validateSync(values[fieldName]);
    } catch (error) {
      return fieldSchema.message || `${fieldName} is invalid`;
    }
    return null;
  };

  return (
    <StyleSectionFormRegistration state={step}>
      {isLoading && <div>Loading...</div>}
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <StyleFormRegistration state={step}>
              <StyleRegistrTitle>Registration</StyleRegistrTitle>
              {step === 1 && (
                <>
                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <StyleErrorMessage name="email">
                      {(msg) => <Error>{msg}</Error>}
                    </StyleErrorMessage>
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                    />
                    <ToggleShowPasword onClick={toggleShowPassword}>
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </ToggleShowPasword>
                    <StyleErrorMessage name="password">
                      {(msg) => <Error>{msg}</Error>}
                    </StyleErrorMessage>
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type={showPassword ? 'text' : 'password'}
                      name="passwordConfirm"
                      placeholder="Confirm Password"
                    />
                    <ToggleShowPasword onClick={toggleShowPassword}>
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </ToggleShowPasword>
                    <StyleErrorMessage name="passwordConfirm">
                      {(msg) => <Error>{msg}</Error>}
                    </StyleErrorMessage>
                  </StyleRegistrFormGroup>

                  <BtnNextRegistration
                    type="button"
                    onClick={() => handleNext(values)}
                  >
                    Next
                  </BtnNextRegistration>
                  <StyleLinkOnLogin>
                    Already have an account?
                    <StyleLink to="/login">Login</StyleLink>
                  </StyleLinkOnLogin>
                </>
              )}

              {step === 2 && (
                <>
                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <StyleErrorMessage name="name">
                      {(msg) => <Error>{msg}</Error>}
                    </StyleErrorMessage>
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="text"
                      name="location"
                      placeholder="City, region"
                    />
                    <StyleErrorMessage name="location">
                      {(msg) => <Error>{msg}</Error>}
                    </StyleErrorMessage>
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="text"
                      name="phone"
                      placeholder="Mobile phone"
                    />
                    <StyleErrorMessage name="phone">
                      {(msg) => <Error>{msg}</Error>}
                    </StyleErrorMessage>
                  </StyleRegistrFormGroup>
                  <StyleBtnRegister type="submit">Register</StyleBtnRegister>
                  <StyleBtnBack type="button" onClick={handleBack}>
                    Back
                  </StyleBtnBack>
                  <StyleLinkOnLogin>
                    Already have an account?
                    <StyleLink to="/login">Login</StyleLink>
                  </StyleLinkOnLogin>
                </>
              )}
            </StyleFormRegistration>
          )}
        </Formik>
      </Container>
    </StyleSectionFormRegistration>
  );
};

export default RegistrationForm;
