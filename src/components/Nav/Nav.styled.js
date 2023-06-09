import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 80px;
  }
`;

export const StyledLink = styled(NavLink)`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 0.04em;
    color: var(--navColor);
    transition: var(--transition);

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
      text-decoration-line: underline;
      color: var(--accentColor);
    }
  }
`;
