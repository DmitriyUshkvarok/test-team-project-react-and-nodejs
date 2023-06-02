import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
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
                <button type="button" onClick={() => handleNext(values)}>
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
                <button type="submit">Register</button>
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
