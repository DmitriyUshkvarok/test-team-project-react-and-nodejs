import styled from 'styled-components';
import imgPageConfirm from './img/imgfon.png';

export const ConfirmPageSection = styled.div`
  background-image: url(${imgPageConfirm}), var(--gradientAccentColor);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  min-height: 100vh;
`;

export const LogoContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ConfirmTitle = styled.h2`
  @media screen and (min-width: 320px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: var(--manropeFont);
    font-size: var(--fontSize24);
    font-weight: var(--fontWeight700);
    line-height: 1.33;
    letter-spacing: 4%;
    margin-bottom: 40px;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    width: 705px;
    font-size: var(--fontSize32);
    color: var(--whiteColor);
    text-shadow: 3px 3px 3px var(--blackColor);
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--fontSize48);
    margin-bottom: 60px;
  }
`;

export const ConfirmDescription = styled.p`
  @media screen and (min-width: 320px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: var(--manropeFont);
    font-size: var(--fontSize18);
    font-weight: var(--fontWeight500);
    line-height: 1.33;
    letter-spacing: 4%;
    margin-bottom: 40px;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    width: 705px;
    font-size: var(--fontSize28);
    color: var(--whiteColor);
    text-shadow: 3px 3px 3px var(--blackColor);
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export const LoginLink = styled.p`
  @media screen and (min-width: 320px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: var(--manropeFont);
    font-size: var(--fontSize16);
    font-weight: var(--fontWeight500);
    line-height: 1.33;
    letter-spacing: 4%;
    margin-bottom: 40px;
    color: var(--skyColor);
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    width: 705px;
    font-size: var(--fontSize24);
    text-shadow: 1px 1px 1px var(--blackColor);
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export const ResendEmail = styled.div`
  @media screen and (min-width: 320px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: var(--manropeFont);
    font-size: var(--fontSize14);
    font-weight: var(--fontWeight500);
    line-height: 1.33;
    letter-spacing: 4%;
    margin-bottom: 40px;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    width: 705px;
    font-size: var(--fontSize24);
    color: var(--whiteColor);
    text-shadow: 3px 3px 3px var(--blackColor);
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ResendSpan = styled.span`
  margin-left: 10px;
  color: var(--skyColor);
  cursor: pointer;
  text-decoration: underline;
`;
