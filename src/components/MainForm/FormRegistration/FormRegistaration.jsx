import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
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
  // StyleLink,
  StyleBtnRegister,
  StyleBtnBack,
} from './FormRegistration.styled';
import Container from '../../Container/Container';

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

  const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(3).max(20).required(),
    confirmPassword: yup.string().min(3).max(20).required(),
    name: yup.string().min(4).max(20).required(),
    city: yup.string().required(),
    phoneNumber: yup.string().required(),
  });

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
                    <ErrorMessage name="email" />
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" />
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage name="confirmPassword" />
                  </StyleRegistrFormGroup>

                  <BtnNextRegistration
                    type="button"
                    onClick={() => handleNext(values)}
                  >
                    Next
                  </BtnNextRegistration>
                  <StyleLinkOnLogin>
                    Already have an account?
                    {/* <StyleLink>Login</StyleLink> */}
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
                    <ErrorMessage name="name" component="div" />
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="text"
                      name="city"
                      placeholder="City, region"
                    />
                    <ErrorMessage name="city" component="div" />
                  </StyleRegistrFormGroup>

                  <StyleRegistrFormGroup>
                    <StyleFieldRegistr
                      type="text"
                      name="phoneNumber"
                      placeholder="Mobile phone"
                    />
                    <ErrorMessage name="phoneNumber" component="div" />
                  </StyleRegistrFormGroup>
                  <StyleBtnRegister type="submit">Register</StyleBtnRegister>
                  <StyleBtnBack type="button" onClick={handleBack}>
                    Back
                  </StyleBtnBack>
                  <StyleLinkOnLogin>
                    Already have an account?
                    {/* <StyleLink>Login</StyleLink> */}
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
