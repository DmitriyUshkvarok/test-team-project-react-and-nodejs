import styled from 'styled-components';

export const StyledHeaderBurger = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;

    margin: 16px 20px 0 20px;
  }
  @media screen and (min-width: 768px) {
    margin: 24px 32px 0 32px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BoxNav = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const StyledBurger = styled.div`
  @media screen and (min-width: 1280px) {
    display: none;
  }
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

export const Menu = styled.div`
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
    z-index: 10;
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
