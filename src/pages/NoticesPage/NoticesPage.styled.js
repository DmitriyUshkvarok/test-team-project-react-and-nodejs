import styled from 'styled-components';

export const ContainerNav = styled.section`
  @media screen and (min-width: 320px) {
    position: relative;

    padding-top: 42px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 89px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 59px;
    padding-bottom: 200px;
  }
`;

export const Title = styled.h2`
  @media screen and (min-width: 320px) {
    margin-bottom: 28px;

    font-family: var(--manropeFont);
    font-weight: var(--fontWeight700);
    font-size: var(--fontSize24);
    line-height: 1.375;

    text-align: center;

    color: var(--blackColor);
  }
  @media screen and (min-width: 768px) {
    font-size: var(--fontSize48);
    margin-bottom: 40px;
  }
`;
export const BoxCategoriesAddBtn = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    align-items: flex-start;

    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    align-items: center;

    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const BtnAdd = styled.button`
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
  @media screen and (max-width: 767px) {
    position: fixed;
    z-index: 100;
    right: 12px;
    bottom: 90px;
  }

  color: var(--blackColor);
  @media screen and (min-width: 768px) {
    /* position: absolute;
    top: 110px; */
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
