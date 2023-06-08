import {
  ProfilePetListWrapper,
  AddPanel,
  AddPanelTitle,
  AddedTextBtnWrap,
  AddText,
  AddBtn,
  StyleBsPlus,
  ProfileListPet,
  ProfilePetItem,
  ProfilePetImg,
  PetInfoBox,
  ProfilePetName,
  BtnDletePostPet,
  StyleRiDeleteBin5Fill,
  ProfilePetbirth,
  ProfilePetBreed,
  ProfilePetComments,
  Span,
} from './ProfilePetList.styled';

const ProfilePetList = ({ handleClick }) => {
  return (
    <>
      <ProfilePetListWrapper>
        <AddPanel>
          <AddPanelTitle>My pets:</AddPanelTitle>
          <AddedTextBtnWrap>
            <AddText>Add pet</AddText>
            <AddBtn onClick={() => handleClick()}>
              <StyleBsPlus />
            </AddBtn>
          </AddedTextBtnWrap>
        </AddPanel>
        <ProfileListPet>
          <ProfilePetItem>
            <ProfilePetImg
              src="https://www.petcloud.com.au/img/pet_placeholder.png"
              alt=""
            />
            <PetInfoBox>
              <ProfilePetName>
                Name:<Span>Jack</Span>
                <BtnDletePostPet>
                  <StyleRiDeleteBin5Fill />
                </BtnDletePostPet>
              </ProfilePetName>
              <ProfilePetbirth>
                Date of birth:<Span> 22.04.2018</Span>
              </ProfilePetbirth>
              <ProfilePetBreed>
                Breed:<Span> Persian cat</Span>
              </ProfilePetBreed>
              <ProfilePetComments>
                Comments:
                <Span>
                  Jack is a gray Persian cat with green eyes. He loves to be
                  pampered and groomed, and enjoys playing with toys. Although a
                  bitshy, hes a loyal and affectionate lap cat.
                </Span>
              </ProfilePetComments>
            </PetInfoBox>
          </ProfilePetItem>
          <ProfilePetItem>
            <ProfilePetImg
              src="https://www.petcloud.com.au/img/pet_placeholder.png"
              alt=""
            />
            <PetInfoBox>
              <ProfilePetName>
                Name:<Span>Jack</Span>
                <BtnDletePostPet>
                  <StyleRiDeleteBin5Fill />
                </BtnDletePostPet>
              </ProfilePetName>
              <ProfilePetbirth>
                Date of birth:<Span> 22.04.2018</Span>
              </ProfilePetbirth>
              <ProfilePetBreed>
                Breed:<Span> Basenji</Span>
              </ProfilePetBreed>
              <ProfilePetComments>
                Comments:
                <Span>
                  Jack is a handsome Basenji with short, shiny red fur and perky
                  ears. Hes an active and intelligent dog that loves to explore
                  and play. Jack is independent and strong-willed, but also
                  affectionate and loyal to his family. Hes a curious and
                  energetic companion that brings joy and adventure to his
                  familys life.
                </Span>
              </ProfilePetComments>
            </PetInfoBox>
          </ProfilePetItem>
        </ProfileListPet>
      </ProfilePetListWrapper>
    </>
  );
};

export default ProfilePetList;
