import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 40px;

    margin-top: 60px;
  }
  @media screen and (min-width: 768px) {
    gap: 60px;
    margin-top: 88px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-top: 0;
    gap: 80px;
    margin-left: 80px;
    margin-right: auto;
  }
`;

export const StyledLink = styled(NavLink)`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: 32px;
    line-height: 44px;

    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 40px;
    letter-spacing: 0.04em;

    color: #181c27;

    @media screen and (min-width: 768px) {
      font-size: 48px;
      line-height: 1.375;
    }
    @media screen and (min-width: 1280px) {
      font-size: var(--fontSize20);
      line-height: 1.35;
    }

    &.active,
    &:hover {
      font-weight: var(--fontWeight700);
      text-decoration-line: underline;

      color: var(--accentColor);
    }
  }
`;
