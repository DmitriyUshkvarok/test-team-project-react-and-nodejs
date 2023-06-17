import { useState } from 'react';
import { Formik, Field } from 'formik';
import { TfiPlus } from 'react-icons/tfi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useAddUserPetsMutation } from '../../../../redux/usersPetsApi/usersPetsApi';
import LoaderMini from '../../../LoaderMini/LoaderMini';
import {
  LoaderContainer,
  LabelStyled,
  FileInputContainer,
  TitleStepTwo,
  HiddenFileInput,
  UploadedImage,
  InputCommentStyled,
  FormStyled,
  FieldTitle,
} from './ProfileModal.styled';

import {
  TitleModal,
  InputStyled,
  BtnContainer,
  BtnNextDone,
  BtnCancel,
  ErrorMessageStyled,
  BtnBack,
} from '../../Common.styled';
import PropTypes from 'prop-types';

const ProfileModal = ({ handleClose }) => {
  const [isStep1Complete, setIsStep1Complete] = useState(false);
  const [selectedImageForSrc, setSelectedImageForSrc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [addUserPet, { isLoading }] = useAddUserPetsMutation();

  // const handleImageChange = (event) => {
  //   setSelectedImage(event.target.files[0]);
  //   setSelectedImageForSrc(URL.createObjectURL(event.target.files[0]));
  // };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setSelectedImageForSrc(URL.createObjectURL(file));
  };

  const handleCloseModal = (formik) => {
    formik.resetForm();

    handleClose();
  };

  const handleBack = (formik) => {
    formik.setErrors((errors) => ({ ...errors, comments: undefined }));

    setIsStep1Complete(false);
  };

  const handleSubmit = async (values, actions) => {
    const formData = new FormData();
    formData.append('imagePet', selectedImage);
    formData.append('name', values.name);
    formData.append('birthday', values.birthday);
    formData.append('breed', values.breed);
    formData.append('comments', values.comments);

    const res = await addUserPet(formData);

    if (res.error) {
      return Notify.failure(res.error.data.message);
    }
    Notify.success('Succsess');
    handleClose();
    setIsStep1Complete(false);
    setSelectedImageForSrc(null);
    actions.resetForm();
  };

  const handleClickNext = () => {
    setIsStep1Complete(true);
  };

  return (
    <>
      <TitleModal>Add pet</TitleModal>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: '',
          birthday: '',
          breed: '',
          comments: '',
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = `name is required field`;
          } else if (values.name.length < 2) {
            errors.name = `name should have at least 2 letters`;
          }

          if (!values.birthday) {
            errors.birthday = `birthday is required field`;
          } else if (!/^[\d./-]+$/i.test(values.birthday)) {
            errors.birthday = 'birthday should consist of digits only';
          }

          if (!values.breed) {
            errors.breed = `breed is required field`;
          } else if (values.breed.length < 4) {
            errors.breed = `breed should have at least 4 letters`;
          }

          if (!values.comments && isStep1Complete) {
            errors.comments = `comments is required field`;
          } else if (values.comments && values.comments.length < 10) {
            errors.comments = `comments should have at least 10 letters`;
          }

          return errors;
        }}
      >
        {(formik) => (
          <FormStyled state={isStep1Complete.toString()}>
            {!isStep1Complete && (
              <>
                <LabelStyled>
                  <FieldTitle>Name pet</FieldTitle>
                  <InputStyled
                    name="name"
                    type="text"
                    placeholder="Type name pet"
                  />
                  <ErrorMessageStyled name="name" component="div" />
                </LabelStyled>
                <LabelStyled>
                  <FieldTitle>Date of birth</FieldTitle>
                  <InputStyled
                    name="birthday"
                    type="text"
                    placeholder="Type date of birth"
                  />
                  <ErrorMessageStyled name="birthday" component="div" />
                </LabelStyled>
                <LabelStyled>
                  <FieldTitle>Breed</FieldTitle>
                  <InputStyled
                    name="breed"
                    type="text"
                    placeholder="Type breed"
                  />
                  <ErrorMessageStyled name="breed" component="div" />
                </LabelStyled>
                <BtnContainer>
                  <BtnNextDone
                    type="button"
                    disabled={!formik.isValid || !formik.dirty}
                    onClick={handleClickNext}
                  >
                    Next
                  </BtnNextDone>
                  <BtnCancel
                    onClick={() => handleCloseModal(formik)}
                    type="button"
                  >
                    Cancel
                  </BtnCancel>
                </BtnContainer>
              </>
            )}

            {isStep1Complete && (
              <>
                <TitleStepTwo>Add photo and some comments</TitleStepTwo>
                <FileInputContainer required>
                  {selectedImageForSrc ? (
                    <UploadedImage src={selectedImageForSrc} alt="Uploaded" />
                  ) : (
                    <TfiPlus size={48} color="rgba(17, 17, 17, 0.6)" />
                  )}
                  <HiddenFileInput type="file" onChange={handleImageChange} />
                </FileInputContainer>

                <LabelStyled>
                  <FieldTitle>Comments</FieldTitle>
                  <Field
                    as={InputCommentStyled}
                    name="comments"
                    type="text"
                    placeholder="Type comments"
                  />
                  <ErrorMessageStyled name="comments" component="div" />
                </LabelStyled>
                <BtnContainer>
                  <BtnNextDone type="submit">Done</BtnNextDone>
                  <BtnBack type="button" onClick={() => handleBack(formik)}>
                    Back
                  </BtnBack>
                </BtnContainer>
              </>
            )}
          </FormStyled>
        )}
      </Formik>
      {isLoading && (
        <LoaderContainer>
          <LoaderMini />
        </LoaderContainer>
      )}
    </>
  );
};

ProfileModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ProfileModal;
