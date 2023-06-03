import { Formik } from 'formik';
import * as yup from 'yup';
import {
  StyleSectionFormLogin,
  StyleFormLogin,
  StyleRegistrTitle,
  StyleRegistrFormGroup,
  StyleFieldRegistr,
  StyleLinkOnLogin,
  StyleLink,
  StyleBtnRegister,
  TextError,
  StyleAiOutlineCloseCircle,
  TextSuccess,
  StyleAiOutlineCheckCircle,
  ToggleShowPasword,
} from './FormLogin.styled';
import Container from '../../Container/Container';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(3).max(20).required(),
  });

  const toggleShowPassword = () => {
    setShowPassword((prewShowPassword) => !prewShowPassword);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <StyleSectionFormLogin>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, errors, touched, isValid }) => (
            <StyleFormLogin>
              <StyleRegistrTitle>Login</StyleRegistrTitle>
              <StyleRegistrFormGroup>
                <StyleFieldRegistr
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  className={`input-field ${
                    errors.email && touched.email ? 'error' : ''
                  } ${isValid ? 'success' : ''}`}
                />
                {errors.email && touched.email && (
                  <>
                    <TextError>Enter a valid Email</TextError>
                    <StyleAiOutlineCloseCircle />
                  </>
                )}
                {isValid && (
                  <>
                    <TextSuccess>Valid email</TextSuccess>
                    <StyleAiOutlineCheckCircle />
                  </>
                )}
              </StyleRegistrFormGroup>

              <StyleRegistrFormGroup>
                <StyleFieldRegistr
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  className={`input-field ${
                    errors.password && touched.password ? 'error' : ''
                  } ${isValid ? 'success' : ''}`}
                />
                <ToggleShowPasword onClick={toggleShowPassword}>
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </ToggleShowPasword>
                {errors.password && touched.password && (
                  <>
                    <TextError>Enter a valid Password</TextError>
                    <StyleAiOutlineCloseCircle />
                  </>
                )}
                {isValid && (
                  <>
                    <TextSuccess>Valid password</TextSuccess>
                    <StyleAiOutlineCheckCircle />
                  </>
                )}
              </StyleRegistrFormGroup>
              <StyleBtnRegister type="submit">Login</StyleBtnRegister>
              <StyleLinkOnLogin>
                Dont have an account?
                <StyleLink to="/register">Register</StyleLink>
              </StyleLinkOnLogin>
            </StyleFormLogin>
          )}
        </Formik>
      </Container>
    </StyleSectionFormLogin>
  );
};

export default FormLogin;
