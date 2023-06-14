import styled from 'styled-components';

export const ContainerNav = styled.div`
  position: relative;
`;

export const BtnAdd = styled.button`
  position: fixed;
  z-index: 100;
  right: 12px;
  top: 350px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-family: var(--manropeFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize20);
  line-height: 27px;

  color: var(--blackColor);
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 110px;
  }
`;

export const WrapIcon = styled.span`
  display: flex;
  flex-direction: column;
  background-color: var(--accentColor);
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const TitleBtnMobile = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
`;
