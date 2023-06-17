import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const OurFriendsTitle = styled.h2`
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
    margin-bottom: 60px;
  }
`;

export const FriendsList = styled.ul`
  @media screen and (min-width: 320px) {
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
    justify-content: center;
  }
`;

export const FriendsItem = styled.li`
  @media screen and (min-width: 320px) {
    position: relative;
    width: 100%;
    background-color: var(--whiteColor);
    filter: drop-shadow(7px 4px 14px rgba(49, 21, 4, 0.07));
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: var(--borderRadius20);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }
`;

export const FriendsName = styled.a`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight700);
    font-size: var(--fontSize12);
    line-height: 1.33;
    text-decoration-line: underline;
    color: var(--accentColor);
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize16);
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const CardInfoContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    gap: 12px;
  }

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const FriendsImgWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 110px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
  }

  @media screen and (min-width: 1280px) {
    width: 158px;
  }
`;

export const FriendsImg = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    object-fit: cover;
  }
`;

export const FriendsInfoWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const FriendsTimes = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: 12px;
    font-size: var(--fontSize12);
    line-height: 1.33;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize14);
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--fontSize16);
  }
`;

export const Span = styled.span`
  @media screen and (min-width: 320px) {
    display: block;
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: 12px;
    font-size: var(--fontSize12);
    line-height: 1.33;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize14);
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--fontSize16);
  }
`;

export const TimeContainer = styled.div`
  cursor: pointer;

  &:hover > ${FriendsTimes} {
    color: var(--accentColor);
  }

  &:hover > ${Span} {
    color: var(--accentColor);
  }
`;

export const AddressContainer = styled.div``;

export const EmailContainer = styled.div``;

export const PhoneContainer = styled.div``;

export const FriendsAddress = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: 12px;
    font-size: var(--fontSize12);
    line-height: 1.33;
    text-decoration-line: underline;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize14);
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--fontSize16);
  }
`;

export const FriendsEmail = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: 12px;
    font-size: var(--fontSize12);
    line-height: 1.33;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize14);
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--fontSize16);
  }
`;

export const FriendsPhone = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: 12px;
    font-size: var(--fontSize12);
    line-height: 1.33;
    color: var(--blackColor);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize14);
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--fontSize16);
  }
`;

export const SpanFrom = styled.span``;

export const SpanTo = styled.span``;

export const TimeList = styled.ul`
  @media screen and (min-width: 320px) {
    position: absolute;
    top: 75px;
    left: 125px;
    width: 120px;
    height: 160px;
    background: var(--whiteColor);
    border: 1px solid var(--accentColor);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
  }

  @media screen and (min-width: 768px) {
    top: 95px;
    left: 135px;
  }
  @media screen and (min-width: 1280px) {
    top: 100px;
    left: 175px;
  }
`;

export const TimeListItem = styled.li`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TimeListDay = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize12);
    line-height: 1.33;
    color: var(--blackColor);
    margin-right: auto;
  }
`;

export const TimeListFrom = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize12);
    line-height: 1.33;
    color: var(--blackColor);
  }
`;

export const TimeListTo = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--manropeFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize12);
    line-height: 1.33;
    color: var(--blackColor);
    margin-left: 2px;
  }
`;
