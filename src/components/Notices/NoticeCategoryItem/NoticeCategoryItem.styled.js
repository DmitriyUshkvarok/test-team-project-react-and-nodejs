import styled from 'styled-components';

export const ListCardPet = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    align-items: stretch;
  }
`;

export const ItemCardPet = styled.li`
  width: 280px;
  background-color: var(--whiteColor);
  border-radius: 0px 0px 20px 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const ImgPetCard = styled.img`
  @media screen and (min-width: 768px) {
    width: 336px;

    object-fit: cover;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;

    object-fit: cover;
  }
`;

export const WrapImg = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const BtnFavorite = styled.button`
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  right: 12px;
  top: 12px;
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
  line-height: 15px;

  letter-spacing: 0.04em;

  color: var(--blackColor);
`;
export const WrapContentItemCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 0 20px 12px;
`;

export const TitleCardItem = styled.p`
  min-height: 76px;
  text-align: center;
  font-weight: var(--fontWeight700);
  font-size: var(--fontSize28);
  line-height: 38px;
  letter-spacing: -0.01em;

  color: var(--blackColor);

   @media screen and (min-width: 768px) {
    text-align: inherit;
   
  }

}
`;

export const WrapDescCardPet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DescTitlePet = styled.p`
  display: flex;
  gap: 40px;

  font-weight: var(--fontWeight500);
  font-size: var(--fontSize16);
  line-height: 22px;

  color: var(--blackColor);
`;

export const WrapBtnDeleteAndLearnMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ShareBtn = `
   display: flex;
    align-items: center;
    justify-content: center;
   
    width: 248px;
    padding: 8px 0;
    
    border: 2px solid;
    background-color: var(--whiteColor);
    border-radius: var(--borderRadiusInput);

    font-family: var(--manropeFont);
    
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize16);
    line-height: 22px;

    letter-spacing: 0.04em;
    cursor: pointer;

`;

export const BtnLearnMore = styled.button`
  ${ShareBtn}
  border-color:var(--accentColor);
  color: var(--accentColor);
`;

export const BtnDelete = styled.button`
  ${ShareBtn}

  border-color: #ff6101;
  gap: 14px;
  color: #ff6101;
`;
