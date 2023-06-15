import styled from 'styled-components';
import { TbDog } from 'react-icons/tb';

export const StyleTbDog = styled(TbDog)`
  @media screen and (min-width: 320px) {
    animation: rotate 1s infinite linear;
    -webkit-animation: rotate 1s infinite linear;
    display: block;
    color: var(--accentColor);

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
