import styled from 'styled-components';
import { MdAddAPhoto } from 'react-icons/md';
import { HiPencil, HiCheck } from 'react-icons/hi';
import { TbLogout } from 'react-icons/tb';

export const SectionProfileInfo = styled.section``;

export const InfoUserTitle = styled.h3`
  @media screen and (min-width: 320px) {
    margin-bottom: 18px;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize20);
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize28);
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const ProfileUserBox = styled.div`
  @media screen and (min-width: 320px) {
    width: 280px;

    @media screen and (min-width: 768px) {
      width: 723px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 411px;
  }
`;

export const ProfileInfoWrapper = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--whiteColor);
    box-shadow: var(--boxShadowFormRegistr);
    border-radius: var(--borderRadius20);
    padding: 20px 16px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 52px;
    padding-left: 32px;
    padding-top: 24px;
    padding-right: 40px;
    padding-bottom: 54px;
    border-radius: 0px 40px 40px 0px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    padding: 20px 16px;
    gap: 0;
  }
`;

export const ProfilePhotoBlock = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    width: 233px;
    height: 233px;
    border-radius: 50%;
    margin-bottom: 70px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const PhotoUser = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
    object-fit: cover;
  }
`;

export const LabelEditPhoto = styled.label`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -32px;
    right: 0;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    bottom: -32px;
  }

  @media screen and (min-width: 1280px) {
    bottom: 0;
    right: -70px;
  }
`;

export const SpanEditPhoto = styled.span`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-size: var(--fontSize12);
    line-height: 1.83;
    letter-spacing: 0.04em;
    color: var(--blackColor);
  }
`;

export const InputEditPhoto = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyleMdAddAPhoto = styled(MdAddAPhoto)`
  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
    color: var(--accentColor);
    margin-right: 5px;
  }
`;

export const BtnSaveFotoUser = styled.button`
  @media screen and (min-width: 32px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: -33px;
    right: 100px;
    cursor: pointer;
    font-family: var(--manropeFont);
    font-size: var(--fontSize12);
    line-height: 1.83;
    letter-spacing: 0.04em;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    bottom: -33px;
  }

  @media screen and (min-width: 1280px) {
    bottom: -30px;
    right: -43px;
  }
`;

export const ProfileInfoList = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 44px;
    row-gap: 4px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 36px;
    margin-bottom: 24px;
  }
`;

export const ProfileInfoItem = styled.li`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LabelInfo = styled.label`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize12);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: var(--blackColor);
    width: 59px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize18);
    width: 83px;
  }
`;

export const IputInfoContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: start;
  }
`;

export const SpanInfoUser = styled.span`
  @media screen and (min-width: 320px) {
    width: 159px;
    font-family: var(--manropeFont);
    font-size: var(--fontSize12);
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    width: 216px;
    font-size: var(--fontSize18);
    margin-left: 36px;
  }
`;

export const InputInfo = styled.input`
  @media screen and (min-width: 320px) {
    display: flex;
    width: 159px;
    height: 24px;
    border: none;
    padding-left: 10px;

    &:focus {
      background-color: var(--fonColor);
      border-radius: var(--borderRadiusInput);
      border: 1px solid rgba(245, 146, 86, 0.5);
      outline: none;
    }

    &:focus + ${SpanInfoUser} {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    width: 216px;
    height: 32px;
  }
`;

export const IconInfoUserContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--fonColor);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin-left: 12px;
    width: 32px;
    height: 32px;
  }
`;

export const StyleHiPencil = styled(HiPencil)`
  @media screen and (min-width: 320px) {
    width: 15px;
    height: 15px;
    color: var(--accentColor);
  }
`;

export const StyleHiCheck = styled(HiCheck)`
  width: 15px;
  height: 15px;
  color: var(--accentColor);
`;

export const LogoutBlock = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    margin-left: 0;
    bottom: 24px;
    left: 32px;
  }

  @media screen and (min-width: 1280px) {
    position: static;
    align-self: flex-start;
  }
`;

export const Span = styled.span`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize16);
    line-height: 1.37;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
    margin-left: 8px;
  }
`;

export const StyleTbLogout = styled(TbLogout)`
  @media screen and (min-width: 320px) {
    width: 18px;
    height: 18px;
    color: var(--accentColor);
  }
`;
