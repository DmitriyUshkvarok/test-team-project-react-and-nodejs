import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserLink = styled(NavLink)`
  @media screen and (min-width: 320px) {
    width: 164px;
    height: 35px;

    background: var(--accentColor);
    border-radius: var(--borderRadiusInput);

    font-family: var(--manropeFont);
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.36;
    letter-spacing: 0.04em;

    padding-top: 8px;
    padding-bottom: 8px;

    text-align: center;
    display: flex;
    justify-content: center;

    color: var(--whiteColor);
  }
  @media screen and (min-width: 768px) {
    height: 44px;
    font-size: var(--fontSize16);
    line-height: 1.375;

    align-items: center;
    margin-right: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 16px;
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
