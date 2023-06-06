import styled from 'styled-components';

export const NewsTitle = styled.h2`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight700);
    font-size: var(--fontSize24);
    line-height: 1.37;
    color: var(--blackColor);
    margin-bottom: 28px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize48);
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NewsList = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 32px;
    row-gap: 60px;
    align-items: baseline;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NewsListItem = styled.li`
  @media screen and (min-width: 320px) {
    position: relative;
    width: 280px;

    &::before {
      content: '';
      position: absolute;
      top: -14px;
      left: 0;
      display: block;
      width: 100%;
      height: 6px;
      background-image: var(--gradientAccentColor);
      border-radius: var(--borderRadiusInput);
    }
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1072px) {
    min-height: 520px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 520px;
  }
`;

export const NewsImg = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 252px;
    border-radius: var(--borderRadius20);
    object-fit: cover;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NewsItemTitle = styled.h3`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight700);
    font-size: var(--fontSize24);
    line-height: 1.37;
    color: var(--blackColor);
    letter-spacing: -0.01em;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NewsItemDescription = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: 400;
    font-size: var(--fontSize16);
    line-height: 1.37;
    color: var(--colorNewsDesc);
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const BottomItemPanel = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    margin-top: auto;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StyleDatePost = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: 400;
    font-size: var(--fontSize16);
    line-height: 1.37;
    color: var(--grayColor);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StyleReadMore = styled.div`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize16);
    line-height: 1.37;
    text-decoration-line: underline;
    color: var(--accentColor);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
