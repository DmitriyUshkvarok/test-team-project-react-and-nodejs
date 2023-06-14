import styled from 'styled-components';

export const ContainerNav = styled.div`
  position: relative;
`;

export const BtnAdd = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -10px);
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
`;

export const WrapIcon = styled.span`
  display: flex;
  background-color: var(--accentColor);
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
