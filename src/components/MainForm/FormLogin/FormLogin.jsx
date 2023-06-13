import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import authOperation from '../../../redux/auth/authOperation';

const initialValues = {
  email: '',
  password: '',
};

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(3).max(20).required(),
  });

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    try {
      await dispatch(authOperation.logIn(values));
      navigate('/user');
    } catch (error) {
      // Обработка ошибки
    }
    setIsLoading(false);
    setSubmitting(false);
  };

  return (
    <StyleSectionFormLogin>
      {isLoading && <div>Loading...</div>}
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, errors, touched }) => (
            <StyleFormLogin>
              <StyleRegistrTitle>Login</StyleRegistrTitle>
              <StyleRegistrFormGroup>
                <StyleFieldRegistr
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={handleChange}
                  value={values.email}
                  className={`input-field ${
                    errors.email && touched.email ? 'error' : ''
                  }`}
                />
                {errors.email && touched.email && (
                  <>
                    <TextError>Enter a valid Email</TextError>
                    <StyleAiOutlineCloseCircle />
                  </>
                )}
                {touched.email && !errors.email && (
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
                  autoComplete="off"
                  onChange={handleChange}
                  value={values.password}
                  className={`input-field ${
                    errors.password && touched.password ? 'error' : ''
                  }`}
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
                {touched.password && !errors.password && (
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
