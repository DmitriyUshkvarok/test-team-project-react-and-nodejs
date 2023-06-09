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
  display: flex;
`;

export const Chip = styled.span`
  animation: flip 2.5s infinite linear;
  transform-origin: 10% 70%;
  transform-style: preserve-3d;

  @keyframes flip {
    35% {
      transform: rotateX(360deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
  &:nth-child(even) {
    color: var(--blackColor);
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
    color: var(--accentColor);
  }
  &:nth-child(4) {
    animation-delay: 0.9s;
  }

  &:nth-child(5) {
    animation-delay: 1.2s;
  }
`;
