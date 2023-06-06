import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

  @media screen and (max-width: 1279px) {
    margin-right: auto;
  }
`;
export const Chip = styled.span`
  color: var(--accentColor);
`;
