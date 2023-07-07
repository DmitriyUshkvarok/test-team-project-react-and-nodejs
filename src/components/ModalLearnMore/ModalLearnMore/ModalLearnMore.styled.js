import styled from 'styled-components';

export const ModalContainer = styled.div`
  @media screen and (min-width: 320px) {
    padding-top: 60px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;

    grid-template-areas:
      'first second'
      'third third'
      'fourth fourth';
  }
`;
export const SecondBlock = styled.div`
  @media screen and (min-width: 768px) {
    grid-area: second;
    width: 321px;
    padding-right: 55px;
  }
`;

export const ThirdBlock = styled.div`
  @media screen and (min-width: 768px) {
    grid-area: third;
  }
`;
export const FourthBlock = styled.div`
  @media screen and (min-width: 768px) {
    grid-area: fourth;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row-reverse;
  }
`;

export const WrapImg = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const ImgPetCard = styled.img`
  @media screen and (min-width: 320px) {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 0 0 40px 40px;

    @media screen and (min-width: 768px) {
      width: 288px;

      height: 328px;
    }
  }
`;

export const TitleStatus = styled.p`
  position: absolute;
  left: 0;
  top: 20px;
  width: 158px;
  height: 28px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-bottom-right-radius: 18px;
  border-top-right-radius: 18px;
  background-color: rgba(255, 255, 255, 0.6);
  font-family: var(--interFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize12);
  line-height: 1.25;
  letter-spacing: 0.04em;
  color: var(--blackColor);
`;

export const Title = styled.h3`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight700);
    font-size: var(--fontSize24);
    line-height: 1.375;
    letter-spacing: -0.01em;
    color: var(--blackColor);
    margin-bottom: 16px;
  }
  width: 229px;

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize28);
    line-height: 1.357;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const BoxText = styled.div``;
export const BoxChip = styled.div``;

export const Text = styled.p`
  font-family: var(--manropeFont);
  font-weight: var(--fontWeight600);
  font-size: var(--fontSize14);
  line-height: 1.375;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--blackColor);
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
    line-height: 1.375;
  }
`;

export const Chip = styled.span`
  font-family: var(--manropeFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  line-height: 1.375;

  display: flex;
  align-items: center;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
    line-height: 1.375;
  }
`;
export const ChipEmailPhone = styled(Chip)`
  text-decoration-line: underline;

  color: #f59256;
`;

export const TextComments = styled.p`
  font-family: var(--manropeFont);
  font-weight: var(--fontWeight600);
  font-size: var(--fontSize14);
  line-height: 1.375;

  color: var(--blackColor);

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 32px;
  }
`;
export const ChipComments = styled.span`
  font-family: var(--manropeFont);
  font-weight: var(--fontWeight400);
  font-size: var(--fontSize14);
  line-height: 1.375;
`;

export const Btn = styled.button`
  width: 240px;
  height: 40px;

  background: var(--accentColor);
  color: var(--whiteColor);

  border-radius: 40px;
  border: none;

  margin-top: 40px;
  margin-bottom: 12px;

  font-family: var(--manropeFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize16);
  line-height: 1.375;
  letter-spacing: 0.04em;

  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: var(--whiteColor);
    color: var(--blackColor);
    border: 2px solid var(--accentColor);
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--whiteColor);
    color: var(--accentColor);
    border: 2px solid var(--accentColor);
    margin-top: 0;
    margin-bottom: 0;
    &:hover {
      background: var(--accentColor);
      color: var(--whiteColor);
    }
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    margin-top: 0;
    margin-bottom: 0;
    &:last-child {
      margin-left: 12px;
      margin-right: 24px;
    }
  }
`;

export const ChipText = styled.span`
  display: flex;
  align-items: center;
  color: var(--blackColor);
  margin-right: 8px;
  transition: color 0.3s ease;

  ${Btn}:hover & {
    color: var(--whiteColor);
  }
`;
