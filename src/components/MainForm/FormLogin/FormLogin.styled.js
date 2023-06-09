import styled from 'styled-components';
import backgroundImageMobile from './img/background-mobile.png';
import backgroundImageTablet from './img/background-tablet.png';
import backgroundImageDesktop from './img/background-desktop.png';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

export const StyleSectionFormLogin = styled.section`
  @media screen and (min-width: 320px) {
    padding-top: 44px;
    padding-bottom: 151px;

    background-color: var(--fonColor);
    background-image: url(${backgroundImageMobile});
    background-repeat: no-repeat;
    background-position: bottom;
  }

  @media screen and (min-width: 768px) {
    padding-top: 200px;
    padding-bottom: 260px;
    background-image: url(${backgroundImageTablet});
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 124px;
    background-image: url(${backgroundImageDesktop});
  }
`;

export const StyleFormLogin = styled(Form)`
  @media screen and (min-width: 320px) {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    max-width: 608px;
    background-color: var(--whiteColor);
    border-radius: var(--borderRadiusInput);
    box-shadow: var(--boxShadowFormRegistr);
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 618px;
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
    margin-bottom: 40px;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize36);
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: var(--blackColor);
  }
`;

export const StyleRegistrFormGroup = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;

    &:nth-child(4) {
      margin-bottom: 0;
    }
  }
`;

export const StyleFieldRegistr = styled(Field)`
  @media screen and (min-width: 320px) {
    width: 280px;
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

    @media screen and (min-width: 768px) {
      padding-left: 32px;
      padding-top: 14px;
      padding-bottom: 14px;

      &::placeholder {
        font-size: var(--fontSize18);
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 52px;
    font-size: var(--fontSize18);
    line-height: 1.38;
  }

  @media screen and (min-width: 1280px) {
    width: 458px;
  }

  &.error {
    border: 2px solid var(--errorColor);
  }

  &.success {
    border: 2px solid var(--successColor);
  }
`;

export const ToggleShowPasword = styled.span`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(-50%, -5px);
  -webkit-transform: translate(-50%, -10px);
  -moz-transform: translate(-50%, -10px);
  -ms-transform: translate(-50%, -10px);
  -o-transform: translate(-50%, -10px);
  cursor: pointer;
`;

export const TextError = styled.div`
  position: absolute;
  bottom: -20px;
  left: 20px;
  font-family: var(--manropeFont);
  font-size: var(--fontSize14);
  line-height: 19px;
  color: var(--errorColor);
`;

export const TextSuccess = styled.div`
  position: absolute;
  bottom: -20px;
  left: 20px;
  font-family: var(--manropeFont);
  font-size: var(--fontSize14);
  line-height: 19px;
  color: var(--successColor);
`;

export const StyleAiOutlineCheckCircle = styled(AiOutlineCheckCircle)`
  position: absolute;
  top: 50%;
  transform: translate(-16px, -50%);
  right: 16px;
  color: var(--successColor);
`;

export const StyleAiOutlineCloseCircle = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 50%;
  transform: translate(-16px, -50%);
  right: 16px;
  color: var(--errorColor);
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

export const StyleLink = styled(Link)`
  color: var(--skyColor);
  margin-left: 5px;
  text-decoration: underline;
`;

export const StyleBtnRegister = styled.button`
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 44px;
    margin-top: 40px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
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

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 52px;
    font-size: var(--fontSize20);
    line-height: 1.38;
  }
`;
