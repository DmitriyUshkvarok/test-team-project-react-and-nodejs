import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

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

export const InputStyled = styled(Field)`
  height: 40px;
  width: 240px;
  background: var(--fonColor);
  border: 1px solid var(--borderColorInput);
  border-radius: var(--borderRadiusInput);
  padding-left: 14px;

  ::placeholder {
    font-family: var(--manropeFont);
    font-size: var(--fontSize14);
    line-height: 19px;

    color: rgba(27, 27, 27, 0.6);
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 48px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SharedButtonStyles = `
  padding: 9px;
  border-radius: var(--borderRadiusInput);
  font-family: var(--manropeFont);
 
  font-weight: var( --fontWeight500);
  font-size: var(--fontSize16);
  line-height: 22px;
  letter-spacing: 0.04em;
  cursor: pointer;
`;

export const BtnNextDone = styled.button`
  ${SharedButtonStyles}
  padding: 10px;
  padding-right: 101px;
  padding-left: 101px;
  background: var(--accentColor);
  color: var(--whiteColor);
  border: none;

  @media screen and (min-width: 768px) {
    padding-right: 67px;
    padding-left: 67px;
  }
`;

export const BtnCancelBack = styled.button`
  ${SharedButtonStyles}
  padding-right: 90px;
  padding-left: 90px;
  background: var(--whiteColor);
  color: var(--blackColor);
  border: 2px solid var(--accentColor);

  @media screen and (min-width: 768px) {
    padding-right: 48px;
    padding-left: 48px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  bottom: -18px;
  color: var(--errorColor);
  font-size: var(--fontSize12);
`;
