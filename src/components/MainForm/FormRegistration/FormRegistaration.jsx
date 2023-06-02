import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

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

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          {step === 1 && (
            <>
              <div>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" />
              </div>

              <div>
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" />
              </div>

              <div>
                <label>Confirm Password</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" />
              </div>

              <div>
                <button type="button" onClick={handleNext} disabled={isValid}>
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label>Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>

              <div>
                <label>City</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="div" />
              </div>

              <div>
                <label>Phone Number</label>
                <Field type="text" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />
              </div>

              <div>
                <button type="submit" disabled={isSubmitting}>
                  Register
                </button>
                <button type="button" onClick={handleBack}>
                  Back
                </button>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
