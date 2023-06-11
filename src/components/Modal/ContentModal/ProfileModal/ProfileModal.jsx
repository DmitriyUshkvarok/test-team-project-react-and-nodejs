import { useState } from 'react';
import { Formik, Field } from 'formik';
import { TfiPlus } from 'react-icons/tfi';
// import { usePostFormDataMutation } from '../../../../redux/newsApi/newsApi';
import axios from 'axios';
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
  // const [postData, postForm] = usePostFormDataMutation();
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setSelectedImageForSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (values, actions) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlZGEzMDI3MzQwYWIwNjkzZTJiMCIsImlhdCI6MTY4NjMwMjEyOCwiZXhwIjoxNjg2MzQ1MzI4fQ.3YAQ3EIX803gq_pkFVZezyW0NUVNue8njezS-tUc9LE';

    const formData = new FormData();
    formData.append('imagePet', selectedImage);
    formData.append('name', values.name);
    formData.append('birthday', values.birthday);
    formData.append('breed', values.breed);
    formData.append('comments', values.comments);

    axios
      .post('https:/pets-shelter-service.onrender.com/api/userPets', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    setSelectedImageForSrc(null);
    actions.resetForm();
  };

  const handleCloseModal = (formik) => {
    formik.resetForm();

    handleClose();
  };

  const handleClickNext = () => {
    setIsStep1Complete(true);
  };

  return (
    <div>
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
          }

          if (!values.birthday) {
            errors.birthday = `birthday is required field`;
          }

          if (!values.breed) {
            errors.breed = `breed is required field`;
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
                <FileInputContainer>
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
                </LabelStyled>
                <BtnContainer>
                  <BtnNextDone type="submit">Done</BtnNextDone>
                  <BtnCancelBack
                    type="button"
                    onClick={() => setIsStep1Complete(false)}
                  >
                    Back
                  </BtnCancelBack>
                </BtnContainer>
              </>
            )}
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default ProfileModal;
