import styled from 'styled-components';
import { TbDog } from 'react-icons/tb';
// import { SiGnuicecat } from 'react-icons/si';

export const LoaderWraper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: var(--gradientAccentColor);
`;

export const Spinner = styled(TbDog)`
  @media screen and (min-width: 320px) {
    animation: rotate 1s infinite linear;
    -webkit-animation: rotate 1s infinite linear;
    display: block;
    color: #ffdf48;
    /* color: var(--accentColor); */

    font-size: 150px;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 250px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 350px;
  }
`;
