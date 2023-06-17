import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BoxCategories = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    width: 480px;
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 810px;
  }
`;

export const StyledLink = styled(NavLink)`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 28px;
    height: 35px;
    background: var(--whiteColor);
    border: 2px solid var(--accentColor);
    border-radius: var(--borderRadiusInput);
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: var(--blackColor);
    transition: var(--transition);
  }

  @media screen and (min-width: 768px) {
    gap: 10px;
    padding: 10px 28px;
    font-size: var(--fontSize20);
    line-height: 1.35;
    height: 47px;
  }

  &:active,
  &:hover {
    background: var(--accentColor);
    color: var(--whiteColor);
  }
`;
