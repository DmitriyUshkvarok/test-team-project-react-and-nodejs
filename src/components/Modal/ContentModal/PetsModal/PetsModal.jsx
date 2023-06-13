import { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { TfiPlus } from 'react-icons/tfi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import CustomRadioButton from './CustomRadioButton';
import { useAddPetsMutation } from '../../../../redux/petsApi/petsApi';
import {
  RadioButtonWrapper,
  TitleModal,
  Desc,
  Formstyled,
  RadioButtonInput,
  FileInputContainer,
  RadioButtonWrapperSex,
  LabelStyled,
  TitleRadioBtn,
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
} from '../../Common.styled';

import iconMale from '../../img/male.png';
import iconFemale from '../../img/female.png';

const adjustTextareaHeight = (textarea) => {
  textarea.style.height = 'auto';

  textarea.style.height = textarea.scrollHeight + 'px';
};

const CustomRadioButtonStepTwo = ({
  width,
  height,
  iconSrc,
  label,
  ...props
}) => {
  return (
    <LabelStyled>
      <img width={width} height={height} src={iconSrc} alt="Icon" />
      <RadioButtonInput type="radio" {...props} />
      <TitleRadioBtn>{label}</TitleRadioBtn>
    </LabelStyled>
  );
};

const PetsModal = ({ handleClose }) => {
  const [showFirstPart, setShowFirstPart] = useState(true);
  const [showSecondPart, setShowSecondPart] = useState(false);
  const [selectedImageForSrc, setSelectedImageForSrc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectValue, setSelectedValue] = useState('');
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [addPet, result] = useAddPetsMutation();

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setSelectedImageForSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleCloseModal = (formik) => {
    formik.resetForm();
    setSelectedImageForSrc(null);
    setValue('');
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

    if (formik.isValid && formik.dirty) {
      setShowFirstPart(false);
      setShowSecondPart(true);
    }
  };

  const handleBack = () => {
    setShowFirstPart(true);
    setShowSecondPart(false);
  };

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = async (values, actions) => {
    console.log(actions);
    const formData = new FormData();
    formData.append('imagePet', selectedImage);
    formData.append('name', values.name);
    formData.append('birthday', values.birthday);
    formData.append('breed', values.breed);
    formData.append('comments', value);
    formData.append('location', values.location);
    formData.append('price', values.price);
    formData.append('sex', values.sex);
    formData.append('status', values.status);
    formData.append('title', values.title);

    const res = await addPet(formData);

    if (res.error) {
      return Notify.failure(res.error.data.message);
    }
    Notify.success('Succsess');

    handleClose();

    setShowFirstPart(true);
    setShowSecondPart(false);
    setSelectedImageForSrc(null);
    setValue('');

    actions.resetForm();
  };

  return (
    <>
      <TitleModal>Add pet</TitleModal>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          title: '',
          status: '',
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
              errors.title = 'Required';
            }
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.birthday) {
              errors.birthday = 'Required';
            }
            if (!values.breed) {
              errors.breed = 'Required';
            }
            if (!values.status) {
              errors.status = 'Required';
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
                  Don't wait any longer, give your furry friend the care and
                  love they deserve by adding them to our family today!
                </Desc>
                <RadioButtonWrapper>
                  <CustomRadioButton
                    handleRadioChange={handleRadioChange}
                    value="sell"
                    name="status"
                    label="sell"
                  />
                  <CustomRadioButton
                    handleRadioChange={handleRadioChange}
                    value="lost/found"
                    name="status"
                    label="lost/found"
                  />
                  <CustomRadioButton
                    handleRadioChange={handleRadioChange}
                    value="in good hands"
                    name="status"
                    label="in good hands"
                  />
                </RadioButtonWrapper>

                <LabelStyled>
                  <FieldTitle>Title of ad</FieldTitle>
                  <InputStyled
                    type="text"
                    name="title"
                    placeholder="Type title"
                  />
                  <ErrorMessage name="title" component="div" />
                </LabelStyled>
                <LabelStyled>
                  <FieldTitle>Name pet</FieldTitle>
                  <InputStyled
                    type="text"
                    name="name"
                    placeholder="Type name"
                    // value={formik.values.name}
                  />
                  <ErrorMessage name="name" component="div" />
                </LabelStyled>
                <LabelStyled>
                  <FieldTitle>Date of birth</FieldTitle>
                  <InputStyled
                    type="text"
                    name="birthday"
                    placeholder="Type birthday"
                  />
                  <ErrorMessage name="birthday" component="div" />
                </LabelStyled>
                <LabelStyled>
                  <FieldTitle>Breed</FieldTitle>
                  <InputStyled
                    type="text"
                    name="breed"
                    placeholder="Type breed"
                  />
                  <ErrorMessage name="breed" component="div" />
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
                </LabelStyled>
                <FieldTitleImg>Load the pet's image</FieldTitleImg>
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
                    value={value}
                    onChange={handleChange}
                    onInput={(e) => adjustTextareaHeight(e.target)}
                  />
                </LabelStyled>
                <BtnContainer>
                  <BtnNextDone type="submit">Done</BtnNextDone>
                  <BtnBack type="button" onClick={handleBack}>
                    Back
                  </BtnBack>
                </BtnContainer>
              </>
            )}
          </Formstyled>
        )}
      </Formik>
    </>
  );
};

export default PetsModal;
