import styled from 'styled-components';
import backgroundImage from './background-mobile.png';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const StyleSectionFormRegistration = styled.section`
  @media screen and (min-width: 320px) {
    width: 100vw;
    min-height: 100vh;
    padding-top: 16px;
    padding-bottom: 87px;
    background-color: var(--fonColor);
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

export const StyleFormRegistration = styled(Form)`
  @media screen and (min-width: 320px) {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const StyleRegistrTitle = styled.h2`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    font-family: var(--manropeFont);
    font-size: var(--fontSize24);
    font-weight: var(--fontWeight700);
    line-height: 1.33;
    letter-spacing: 4%;
    margin-top: 40px;
    margin-bottom: 40px;
    color: var(--blackColor);
  }
`;

export const StyleRegistrFormGroup = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    margin-bottom: 24px;

    &:nth-child(4) {
      margin-bottom: 0;
    }
  }
`;

export const StyleFieldRegistr = styled(Field)`
  @media screen and (min-width: 320px) {
    width: 100%;
    max-width: 280px;
    height: 40px;
    border-radius: var(--borderRadiusInput);
    border: 1px solid rgba(245, 146, 86, 0.5);
    padding-left: 14px;
    padding-right: 60px;
    padding-top: 11px;
    padding-bottom: 11px;

    &::placeholder {
      font-family: var(--manropeFont);
      font-size: var(--fontSize14);
      line-height: 1.36;
      letter-spacing: 0.04em;
      color: rgba(17, 17, 17, 0.6);
    }

    &:focus {
      outline: none;
    }
  }
`;

export const BtnNextRegistration = styled.button`
  @media screen and (min-width: 320px) {
    max-width: 280px;
    height: 44px;
    margin-top: 40px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize20);
    line-height: 1.35;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    border-radius: var(--borderRadiusInput);
    border: none;
    background-color: var(--accentColor);
    color: var(--whiteColor);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: rgba(245, 146, 86, 0.8);
    }
  }
`;

export const StyleLinkOnLogin = styled.p`
  @media screen and (min-width: 320px) {
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--manropeFont);
    font-size: var(--fontSize12);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
`;

export const StyleLink = styled(Link)``;

export const StyleBtnRegister = styled.button`
  @media screen and (min-width: 320px) {
    max-width: 280px;
    height: 44px;
    margin-top: 40px;
    margin-bottom: 12px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize20);
    line-height: 1.35;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    border-radius: var(--borderRadiusInput);
    border: none;
    background-color: var(--accentColor);
    color: var(--whiteColor);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: rgba(245, 146, 86, 0.8);
    }
  }
`;

export const StyleBtnBack = styled.button`
  @media screen and (min-width: 320px) {
    max-width: 280px;
    height: 44px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize20);
    line-height: 1.35;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    border-radius: var(--borderRadiusInput);
    border: 2px solid var(--accentColor);
    background-color: transparent;
    color: var(--blackColor);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: rgba(245, 146, 86, 0.4);
    }
  }
`;
