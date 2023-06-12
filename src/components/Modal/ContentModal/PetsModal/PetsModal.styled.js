import styled from 'styled-components';
import { Field, Form } from 'formik';

export const TitleModal = styled.p`
  padding-top: 40px;

  text-align: center;
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize24);
  line-height: 33px;

  color: var(--blackColor);

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize36);
    line-height: 49px;
  }
`;

export const Desc = styled.p`
  margin-bottom: 20px;
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize16);
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;

  color: var(--blackColor);
`;

const SharedRadioBtn = `
 display: flex;
   
  flex-wrap: wrap;`;

export const RadioButtonWrapper = styled.div`
  ${SharedRadioBtn}
  gap: 10px;
`;
export const RadioButtonWrapperSex = styled.div`
  ${SharedRadioBtn}
  gap: 50px;
`;

export const RadioButtonLabel = styled.label`
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  height: 35px;
  background-color: ${(props) =>
    props.checked ? 'var(--accentColor)' : 'var(--whiteColor)'};
  border: 2px solid var(--accentColor);
  border-radius: var(--borderRadiusInput);
  font-family: var(--manropeFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${(props) =>
    props.checked ? 'var(--whiteColor)' : 'var(--blackColor)'};
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--accentColor);
    color: var(--whiteColor);
  }
`;

export const RadioButtonInput = styled(Field)`
  display: none;

  &:checked + ${RadioButtonLabel} {
    background-color: blue;
  }
`;

export const Formstyled = styled(Form)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const FileInputContainer = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px 0;
  width: 118px;
  height: 118px;
  background: #fdf7f2;
  border-radius: 20px;

  padding: 16px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
    margin: 20px auto 40px;
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  display: block;
  align-self: center;

  @media screen and (min-width: 768px) {
  }
`;

export const TitleRadioBtn = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  color: #000000;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const UploadedImage = styled.img`
  width: 208px;
  height: 208px;

  max-height: 208px;
  object-fit: cover;
  border-radius: 20px;
`;
