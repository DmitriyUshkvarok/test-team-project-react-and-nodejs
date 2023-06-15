import { useState } from 'react';
import { Formik, Field } from 'formik';
import { TfiPlus } from 'react-icons/tfi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import {
  CustomRadioButton,
  CustomRadioButtonStepTwo,
} from './CustomRadioButton';
import { useAddPetsMutation } from '../../../../redux/petsApi/petsApi';
import LoaderMini from '../../../LoaderMini/LoaderMini';
import { adjustTextareaHeight } from '../../../auxiliaryFunc/adjustTextareaHeight';
import {
  LoaderContainer,
  RadioButtonWrapper,
  TitleModal,
  Desc,
  Formstyled,
  FileInputContainer,
  RadioButtonWrapperSex,
  LabelStyled,
  HiddenFileInput,
  UploadedImage,
  BtnContainer,
  FieldTitle,
  FieldTitleImg,
  InputCommentStyled,
} from './PetsModal.styled';
import {
  InputStyled,
  BtnNextDone,
  BtnCancel,
  BtnBack,
  ErrorMessageStyled,
} from '../../Common.styled';

import iconMale from '../../img/male.png';
import iconFemale from '../../img/female.png';

// const adjustTextareaHeight = (textarea) => {
//   textarea.style.height = 'auto';

//   textarea.style.height = textarea.scrollHeight + 'px';
// };

const PetsModal = ({ handleClose }) => {
  const [showFirstPart, setShowFirstPart] = useState(true);
  const [showSecondPart, setShowSecondPart] = useState(false);
  const [selectedImageForSrc, setSelectedImageForSrc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectValue, setSelectedValue] = useState('');

  const options = [
    { value: 'sell', label: 'sell' },
    { value: 'lost/found', label: 'lost/found' },
    { value: 'in good hands', label: 'in good hands' },
  ];

  const [addPet, { isLoading }] = useAddPetsMutation();

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setSelectedImageForSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleCloseModal = (formik) => {
    formik.resetForm();
    setSelectedImageForSrc(null);
    setSelectedValue('');
    handleClose();
  };

  const handleNext = (formik) => {
    formik.setTouched({
      title: true,
      name: true,
      birthday: true,
      breed: true,
      status: true,
    });
    console.log(formik);
    if (formik.isValid && formik.dirty) {
      setShowFirstPart(false);
      setShowSecondPart(true);
    }
  };

  const handleBack = (formik) => {
    setShowFirstPart(true);
    setShowSecondPart(false);

    formik.setErrors((errors) => ({ ...errors, comments: undefined }));
  };

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = async (values, actions) => {
    const formData = new FormData();

    formData.append('imagePet', selectedImage);
    formData.append('name', values.name);
    formData.append('birthday', values.birthday);
    formData.append('breed', values.breed);
    formData.append('comments', values.comments);
    formData.append('location', values.location);
    if (values.status === 'sell') {
      formData.append('price', values.price);
    }
    formData.append('sex', values.sex);
    formData.append('status', values.status);
    formData.append('title', values.title);

    const res = await addPet(formData);

    if (res.error) {
      return Notify.failure(res.error.data.message);
    }
    Notify.success('Succsess');

    setShowFirstPart(true);
    setShowSecondPart(false);
    setSelectedImageForSrc(null);
    setSelectedValue('');

    actions.resetForm();

    handleClose();
  };

  return (
    <>
      <TitleModal>Add pet</TitleModal>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          title: '',
          status: 'sell',
          name: '',
          birthday: '',
          breed: '',
          sex: '',
          location: '',
          price: '',
          imagePet: '',
          comments: '',
        }}
        validate={(values) => {
          const errors = {};

          if (showFirstPart) {
            if (!values.title) {
              errors.title = 'title is required field';
            } else if (values.title.length < 5) {
              errors.title = `title should have at least 5 letters`;
            }
            if (!values.name) {
              errors.name = 'name is required field';
            } else if (values.name.length < 2) {
              errors.name = `name should have at least 2 letters`;
            }
            if (!values.birthday) {
              errors.birthday = 'birthday is required field';
            } else if (!/^[\d./-]+$/i.test(values.birthday)) {
              errors.birthday = 'birthday should consist of digits only';
            }
            if (!values.breed) {
              errors.breed = 'breed is required field';
            } else if (values.breed.length < 4) {
              errors.breed = `breed should have at least 4 letters`;
            }
            if (!values.status) {
              errors.status = 'Required';
            }
          }
          if (showSecondPart) {
            if (!values.sex) {
              errors.sex = 'sex is required field';
            }
            if (!values.comments) {
              errors.comments = 'comments is required field';
            } else if (values.comments.length < 10) {
              errors.comments = `comments should have at least 10 letters`;
            }

            if (!values.location) {
              errors.location = 'location is required field';
            }
            if (values.status === 'sell') {
              if (!values.price) {
                errors.price = 'price is required field';
              } else if (!/^[\d./-]+$/i.test(values.price)) {
                errors.price = 'birthday should consist of digits only';
              }
            }
          }

          return errors;
        }}
      >
        {(formik) => (
          <Formstyled state={showSecondPart.toString()}>
            {showFirstPart && (
              <>
                <Desc>
                  Dont wait any longer, give your furry friend the care and love
                  they deserve by adding them to our family today!
                </Desc>
                <RadioButtonWrapper>
                  {options.map(({ value, label }) => (
                    <CustomRadioButton
                      key={value}
                      actual={{
                        backgroundColor:
                          selectValue === value
                            ? 'var(--accentColor)'
                            : 'var(--whiteColor)',
                        color:
                          selectValue === value
                            ? 'var(--whiteColor)'
                            : 'var(--blackColor)',
                      }}
                      handleRadioChange={handleRadioChange}
                      value={value}
                      name="status"
                      label={label}
                    />
                  ))}
                </RadioButtonWrapper>

                <LabelStyled>
                  <FieldTitle>Title of ad</FieldTitle>
                  <InputStyled
                    type="text"
                    name="title"
                    placeholder="Type title"
                  />
                  <ErrorMessageStyled name="title" component="div" />
                </LabelStyled>
                <LabelStyled>
                  <FieldTitle>Name pet</FieldTitle>
                  <InputStyled
                    type="text"
                    name="name"
                    placeholder="Type name"
                  />
                  <ErrorMessageStyled name="name" component="div" />
                </LabelStyled>
                <LabelStyled>
                  <FieldTitle>Date of birth</FieldTitle>
                  <InputStyled
                    type="text"
                    name="birthday"
                    placeholder="Type birthday"
                  />
                  <ErrorMessageStyled name="birthday" component="div" />
                </LabelStyled>
                <LabelStyled>
                  <FieldTitle>Breed</FieldTitle>
                  <InputStyled
                    type="text"
                    name="breed"
                    placeholder="Type breed"
                  />
                  <ErrorMessageStyled name="breed" component="div" />
                </LabelStyled>
                <BtnContainer>
                  <BtnNextDone
                    type="button"
                    onClick={() => handleNext(formik)}
                    disabled={!formik.isValid || !formik.dirty}
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

            {showSecondPart && (
              <>
                <FieldTitle>The sex:</FieldTitle>
                <RadioButtonWrapperSex>
                  <CustomRadioButtonStepTwo
                    iconSrc={iconMale}
                    width={36}
                    height={40}
                    label="Male"
                    name="sex"
                    value="Male"
                  />
                  <CustomRadioButtonStepTwo
                    width={25}
                    height={40}
                    iconSrc={iconFemale}
                    label="Female"
                    name="sex"
                    value="Female"
                  />
                </RadioButtonWrapperSex>

                <LabelStyled>
                  <FieldTitle>Location:</FieldTitle>
                  <InputStyled
                    type="text"
                    name="location"
                    placeholder="Type location"
                  />
                  <ErrorMessageStyled name="location" component="div" />
                </LabelStyled>
                <LabelStyled
                  style={{ display: selectValue === 'sell' ? 'block' : 'none' }}
                >
                  <FieldTitle>Price:</FieldTitle>
                  <InputStyled
                    type="text"
                    name="price"
                    placeholder="Type price"
                  />
                  <ErrorMessageStyled name="price" component="div" />
                </LabelStyled>
                <FieldTitleImg>Load the pets image</FieldTitleImg>
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
                    type="text"
                    name="comments"
                    placeholder="Type comments"
                    onInput={(e) => adjustTextareaHeight(e.target)}
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
          </Formstyled>
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

PetsModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default PetsModal;
