import styled from 'styled-components';

export const ThemeIconWrapper = styled.div``;

export const BoxNavigation = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 16px;
    width: 275px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 38px;
    padding-bottom: 38px;
  }

  @media screen and (min-width: 1280px) {
    width: 1244px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  z-index: 999;
`;

export const NavWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const UserNavWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const AuthNavWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const BurgerWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
