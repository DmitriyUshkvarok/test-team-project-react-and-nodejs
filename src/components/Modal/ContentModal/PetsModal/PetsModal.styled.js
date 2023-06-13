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
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    label:nth-child(2) {
      margin-right: 100px;
    }
  }
`;
export const RadioButtonWrapperSex = styled.div`
  ${SharedRadioBtn}
  gap: 50px;
  margin-bottom: 32px;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-right: auto;
`;

export const RadioButtonLabel = styled.label`
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  height: 35px;

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
`;

export const RadioButtonInput = styled(Field)`
  display: none;

  &:checked + ${RadioButtonLabel} {
    background-color: blue;
  }
`;

export const Formstyled = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

export const FileInputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 118px;
  height: 118px;
  background: #fdf7f2;
  border-radius: 20px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
    border-radius: 40px;
    margin-right: auto;
  }
`;

export const iconStyledSex = styled.img`
  width: 40px;
  height: 40px;
`;

export const FieldTitle = styled.p`
  margin-bottom: 8px;

  font-weight: var(--fontWeight500);
  font-size: var(--fontSize18);
  line-height: 26px;

  color: var(--blackColor);

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize24);
    margin-bottom: 12px;
    margin-right: auto;
  }
`;

export const FieldTitleImg = styled.p`
  margin-bottom: 8px;

  font-weight: var(--fontWeight500);
  font-size: var(--fontSize18);
  line-height: 26px;

  color: var(--blackColor);

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize24);
    margin-bottom: 12px;
    margin-top: 28px;
    margin-right: auto;
  }
`;

export const InputCommentStyled = styled.textarea`
  width: 240px;
  height: 40px;
  resize: none;
  padding: 8px;

  padding-top: 14px;

  resize: none;
  background: var(--fonColor);
  border: 1px solid var(--borderColorInput);
  border-radius: var(--borderRadius20);
  padding-left: 14px;

  ::placeholder {
    position: absolute;
    top: 12px;
    left: 14px;
    font-size: 16px;
    color: gray;
    pointer-events: none;
    transition: all 0.2s ease-in-out;

    font-family: var(--manropeFont);
    font-size: var(--fontSize14);
    line-height: 19px;

    color: rgba(27, 27, 27, 0.6);
  }
  @media screen and (min-width: 768px) {
    width: 394px;
    height: 116px;
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  display: block;

  margin-bottom: 16px;

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
  width: 118px;
  height: 118px;

  object-fit: cover;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-bottom: 40px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
