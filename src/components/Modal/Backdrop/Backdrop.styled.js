import styled from 'styled-components';

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 768px) {
    overflow-y: scroll;
  }

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

export const ModalContainer = styled.div`
   {
    position: relative;
    width: 95%;
    margin: 0 auto;
    margin-top: 40px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background-color: white;
    opacity: 1;
    transition: opacity 550ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 480px) and (max-width: 1199px) {
      width: 450px;
    }
    @media screen and (min-width: 700px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    @media screen and (min-width: 1200px) {
      width: 528px;
    }
  }

  ${BackdropContainer}.is-hidden & {
    opacity: 0;
  }
`;
