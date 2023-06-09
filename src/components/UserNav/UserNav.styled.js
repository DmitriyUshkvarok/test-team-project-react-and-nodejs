import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserLink = styled(NavLink)`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px 28px;
    background: var(--accentColor);
    border-radius: var(--borderRadiusInput);
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: var(--whiteColor);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
    line-height: 1.37;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Chip = styled.span`
  margin-right: 12px;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    width: 28px;
    height: 28px;
  }
`;
