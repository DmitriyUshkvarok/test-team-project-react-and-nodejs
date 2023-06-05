import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  width: 82px;
  height: 42px;

  font-family: var(--poppinsFont);
  font-style: normal;
  font-weight: var(--fontWeight700);
  font-size: var(--fontSize28);
  line-height: 1.5;

  letter-spacing: 0.07em;
  color: var(--blackColor);
  z-index: 10;
`;
export const Chip = styled.span`
  color: var(--accentColor);
`;

export const BoxNav = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const StyledHeaderBurger = styled.div`
  @media screen and (min-width: 320px) {
    margin-bottom: 46px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 16px 20px 0 20px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
    justify-content: end;
  }
`;

export const StyledBurger = styled.div`
  @media screen and (min-width: 1280px) {
    display: none;
  }
  width: 2rem;
  height: 2rem;
  z-index: 20;

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

export const Box = styled.div`
  display: flex;

  align-items: center;
  flex-flow: row nowrap;
  @media screen and (max-width: 1279px) {
    flex-flow: column nowrap;
    position: absolute;
    height: 100vh;
    width: 100%;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-200%)'};

    background-color: var(--fonColor);
    transition: transform 0.3s ease-in-out;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BoxAuthNav = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BoxAuth = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
