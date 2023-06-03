import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
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

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phoneNumber: '',
};

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(3).max(20).required(),
    confirmPassword: yup.string().min(3).max(20).required(),
    name: yup.string().min(4).max(20).required(),
    city: yup.string().required(),
    phoneNumber: yup.string().required(),
  });

  const toggleShowPassword = () => {
    setShowPassword((prewShowPassword) => !prewShowPassword);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
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
          error = validateSchema(values, 'confirmPassword');
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
    <StyleSectionFormRegistration>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <StyleFormRegistration>
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
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <ToggleShowPasword onClick={toggleShowPassword}>
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </ToggleShowPasword>
                    <StyleErrorMessage name="confirmPassword">
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
                      name="city"
                      placeholder="City, region"
                    />
                    <StyleErrorMessage name="city">
                      {(msg) => <Error>{msg}</Error>}
                    </StyleErrorMessage>
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="text"
                      name="phoneNumber"
                      placeholder="Mobile phone"
                    />
                    <StyleErrorMessage name="phoneNumber">
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
