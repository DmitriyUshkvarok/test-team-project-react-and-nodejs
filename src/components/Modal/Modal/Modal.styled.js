import styled from 'styled-components';

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
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
`;

export const BtnClose = styled.button`
  position: absolute;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background-color: var(--fonColor);

  cursor: pointer;
`;
