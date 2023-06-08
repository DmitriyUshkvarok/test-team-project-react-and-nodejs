import styled from 'styled-components';
import backgroundImageMobile from './image/group-m.png';
import backgroundImageTablet from './image/group-t.png';
import backgroundImageDesktop from './image/group-d.png';

export const StyleSectionHomePage = styled.section`
  @media screen and (min-width: 320px) {
    width: 100vw;
    padding-top: 44px;
    padding-bottom: 151px;
    margin: 0 auto;

    height: calc(100vh - 40px);

    background-color: var(--fonColor);
    background-image: url(${backgroundImageMobile});
    background-repeat: no-repeat;
    background-position: bottom;
  }
  @media screen and (min-width: 768px) {
    height: 1121px;
    background-image: url(${backgroundImageTablet});
  }
  @media screen and (min-width: 1280px) {
    height: 700px;
    background-image: url(${backgroundImageDesktop});
  }
`;
export const Title = styled.h1`
  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 20px;
    padding-top: 60px;
    margin: 0 auto;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight700);
    font-size: var(--fontSize32);
    line-height: 1.38;

    color: var(--blackColorHome);
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    font-size: var(--fontSize68);
    line-height: 1.47;
    padding-left: 32px;
    padding-top: 88px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-top: 92px;
  }
`;
