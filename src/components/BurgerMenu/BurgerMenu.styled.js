import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const StyledHeaderBurger = styled.div`
  position: relative;
  z-index: 999;
`;

export const BoxNav = styled.div``;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }) =>
      isOpen ? 'var(--accentColor)' : 'var(--blackColor)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const BoxAuthNav = styled.div``;

export const BoxAuth = styled.div``;

// анимация для мобильного меню
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const MobileMenu = styled.div`
  @media screen and (min-width: 320px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--fonColor);
    z-index: 30;
    display: flex;
    flex-direction: column;
    padding-top: 46px;
    padding-bottom: 190px;
    animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;
  }
`;

export const MobileAuthAndAccountContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    margin-top: 46px;
  }
`;

export const AuthWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    gap: 12px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ProfileWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 164px;
  }
`;

export const StyleMobileLinkLogin = styled(Link)`
  @media screen and (min-width: 320px) {
    width: 95px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--whiteColor);
    border: 2px solid var(--accentColor);
    border-radius: var(--borderRadiusInput);
    transition: var(--transition);
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: var(--colorNewsDesc);

    &:hover {
      background-color: var(--accentColor);
      color: var(--whiteColor);
    }
  }
`;

export const StyleMobileLinkRegistration = styled(Link)`
  @media screen and (min-width: 320px) {
    width: 144px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--whiteColor);
    border: 2px solid var(--accentColor);
    border-radius: var(--borderRadiusInput);
    transition: var(--transition);
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: var(--colorNewsDesc);

    &:hover {
      background-color: var(--accentColor);
      color: var(--whiteColor);
    }
  }
`;

export const StyleMobileLinkAccount = styled(Link)`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 35px;
    background-color: var(--accentColor);
    border-radius: var(--borderRadiusInput);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Manrope';
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: var(--whiteColor);
    transition: var(--transition);

    &:hover {
      background-color: var(--backgroundHoverBtn);
    }
  }
`;

export const MobileNavList = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 88px;
    gap: 60px;
  }
`;

export const MobileListItem = styled.li``;

export const StyleLink = styled(Link)`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize32);
    line-height: 1.37;
    letter-spacing: 0.04em;
    color: var(--colorMobileLink);
    transition: var(--transition);

    &:hover {
      color: var(--accentColor);
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize48);
  }
`;
