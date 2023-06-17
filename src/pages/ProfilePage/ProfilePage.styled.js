import styled from 'styled-components';

export const ProfileInformationBox = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    align-items: normal;
  }

  @media screen and (min-width: 1280px) {
    width: 1264px;
    flex-direction: row;
    gap: 32px;
    align-items: baseline;
  }
`;

export const ProfileInformationContainer = styled.div`
  @media screen and (min-width: 320px) {
    margin-bottom: 47px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ProfilePetListContainer = styled.div`
  @media screen and (min-width: 320px) {
    /* width: 280px; */
    /* margin-left: auto;
    margin-right: auto; */
  }

  /* @media screen and (min-width: 768px) {
    width: 704px;
  } */
`;
