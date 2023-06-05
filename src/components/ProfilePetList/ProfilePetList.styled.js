import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export const ProfilePetListWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }
`;

export const AddPanel = styled.div`
  @media screen and (min-width: 320px) {
    width: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const AddedTextBtnWrap = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AddPanelTitle = styled.h3`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize20);
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: var(--blackColor);
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--fontSize28);
  }
`;

export const AddText = styled.span`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize20);
    line-height: 1.35;
    color: var(--blackColor);
  }
`;

export const AddBtn = styled.button`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--accentColor);
    border: none;
    margin-left: 15px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--backgroundHoverBtn);
    }
  }
`;

export const StyleBsPlus = styled(BsPlus)`
  @media screen and (min-width: 320px) {
    width: 30px;
    height: 30px;
    color: var(--whiteColor);
  }
`;

export const ProfileListPet = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
  }
`;

export const ProfilePetItem = styled.li`
  @media screen and (min-width: 320px) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 280px;
    padding-top: 16px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 40px;
    background-color: var(--whiteColor);
    box-shadow: var(--boxShadowFormRegistr);
    border-radius: var(--borderRadius20);
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const ProfilePetImg = styled.img`
  @media screen and (min-width: 320px) {
    width: 240px;
    height: 240px;
    border-radius: var(--borderRadius20);
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
  }
`;

export const PetInfoBox = styled.div``;

export const ProfilePetName = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: var(--blackColor);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
  }
`;

export const Span = styled.span`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-size: var(--fontSize14);
    line-height: 1.57;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: var(--blackColor);
    margin-left: 3px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0;
  }
`;

export const BtnDletePostPet = styled.button`
  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: var(--fonColor);
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const StyleRiDeleteBin5Fill = styled(RiDeleteBin5Fill)`
  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
    color: var(--grayColor);
  }
`;

export const ProfilePetbirth = styled.p`
  @media screen and (min-width: 320px) {
    position: relative;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.57;
    letter-spacing: 0.04em;
    color: var(--blackColor);
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
  }
`;

export const ProfilePetBreed = styled.p`
  @media screen and (min-width: 320px) {
    position: relative;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: var(--blackColor);
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
  }
`;

export const ProfilePetComments = styled.p`
  @media screen and (min-width: 320px) {
    position: relative;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
  }
`;
