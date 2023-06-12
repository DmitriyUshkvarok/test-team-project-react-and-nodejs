import { useState } from 'react';
import { Formik, Field } from 'formik';
import { TfiPlus } from 'react-icons/tfi';
import { Watch } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useAddUserPetsMutation } from '../../../../redux/usersPetsApi/usersPetsApi';

import {
  LabelStyled,
  FileInputContainer,
  TitleStepTwo,
  HiddenFileInput,
  UploadedImage,
  InputCommentStyled,
  FormStyled,
} from './ProfileModal.styled';

import {
  TitleModal,
  FieldTitle,
  InputStyled,
  BtnContainer,
  BtnNextDone,
  BtnCancelBack,
  ErrorMessageStyled,
} from '../../Common.styled';

const ProfileModal = ({ handleClose }) => {
  const [isStep1Complete, setIsStep1Complete] = useState(false);
  const [selectedImageForSrc, setSelectedImageForSrc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [addUserPet, result] = useAddUserPetsMutation();

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setSelectedImageForSrc(URL.createObjectURL(event.target.files[0]));
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
    <div style={{ height: result.isLoading ? '300px' : '' }}>
      <TitleModal>Add pet</TitleModal>

      {result.isLoading ? (
        <Watch
          height="80"
          width="80"
          radius="48"
          color="var(--accentColor)"
          ariaLabel="watch-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '61px',
          }}
          wrapperClassName=""
          visible={true}
        />
      ) : (
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
            }

            if (!values.birthday) {
              errors.birthday = `birthday is required field`;
            }

            if (!values.breed) {
              errors.breed = `breed is required field`;
            }

            if (!values.comments && isStep1Complete) {
              errors.comments = `comments is required field`;
            }

            return errors;
          }}
        >
          {(formik) => (
            <FormStyled state={isStep1Complete}>
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
                      state={isStep1Complete}
                      type="button"
                      disabled={!formik.isValid || !formik.dirty}
                      onClick={handleClickNext}
                    >
                      Next
                    </BtnNextDone>
                    <BtnCancelBack
                      state={isStep1Complete}
                      onClick={() => handleCloseModal(formik)}
                      type="button"
                    >
                      Cancel
                    </BtnCancelBack>
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
                    <BtnCancelBack
                      type="button"
                      onClick={() => handleBack(formik)}
                    >
                      Back
                    </BtnCancelBack>
                  </BtnContainer>
                </>
              )}
            </FormStyled>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ProfileModal;
