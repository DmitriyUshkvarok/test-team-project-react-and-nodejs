import { Formik, ErrorMessage } from 'formik';
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
} from './FormLogin.styled';
import Container from '../../Container/Container';

const initialValues = {
  email: '',
  password: '',
};

const FormLogin = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(3).max(20).required(),
  });

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
          <StyleFormLogin>
            <StyleRegistrTitle>Login</StyleRegistrTitle>

            <StyleRegistrFormGroup>
              <StyleFieldRegistr
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </StyleRegistrFormGroup>

            <StyleRegistrFormGroup>
              <StyleFieldRegistr
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
            </StyleRegistrFormGroup>
            <StyleBtnRegister type="submit">Login</StyleBtnRegister>
            <StyleLinkOnLogin>
              Dont have an account?
              <StyleLink to="/register">Register</StyleLink>
            </StyleLinkOnLogin>
          </StyleFormLogin>
        </Formik>
      </Container>
    </StyleSectionFormLogin>
  );
};

export default FormLogin;
