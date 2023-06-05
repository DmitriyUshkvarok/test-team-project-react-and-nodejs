import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  @media screen and (min-width: 320px) {
    background: var(--whiteColor);
    border-radius: var(--borderRadiusInput);

    font-family: var(--manropeFont);
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.36;
    letter-spacing: 0.04em;

    box-sizing: border-box;

    text-align: center;
    border: 2px solid var(--accentColor);

    padding: 8px 28px;
    color: var(--blackColor);
  }
  @media screen and (min-width: 768px) {
    height: 44px;
    font-size: var(--fontSize20);
    line-height: 1.35;
    padding: 10px 28px;
    align-items: center;
  }
  &:nth-child(1) {
    margin-right: 12px;
  }

  &.active,
  &:hover {
    background: var(--accentColor);
    color: var(--whiteColor);
  }
`;
