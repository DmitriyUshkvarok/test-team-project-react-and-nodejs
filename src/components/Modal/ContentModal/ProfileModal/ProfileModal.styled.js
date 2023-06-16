import styled from 'styled-components';
import { Form } from 'formik';

export const LoaderContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    margin-top: ${(props) => (props.state ? '20px' : '40px')};
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  margin-bottom: 16px;
  display: block;
  align-self: center;
  &:nth-child(2) {
    margin-bottom: 16px;
  }

  &:nth-child(3) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;

    &:nth-child(2) {
      margin-bottom: 28px;
    }
  }
`;

export const InputCommentStyled = styled.textarea`
  width: 240px;
  height: 100px;

  padding: 8px;
  box-sizing: border-box;
  padding-top: 14px;

  resize: vertical;
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

export const FileInputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 208px;
  height: 208px;
  background: #fdf7f2;
  border-radius: 20px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
    margin: 20px auto 40px;
  }
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
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

export const TitleStepTwo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  text-align: center;
  letter-spacing: -0.01em;

  color: var(--blackColor);

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
  }
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
  }
`;
