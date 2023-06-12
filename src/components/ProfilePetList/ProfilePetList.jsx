import { useGetUserPetsQuery } from '../../redux/usersPetsApi/usersPetsApi';
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
  const { data, error, isLoading } = useGetUserPetsQuery();

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
        {isLoading ? (
          'Loading...'
        ) : (
          <ProfileListPet>
            {data.map(({ _id, imagePet, name, birthday, breed, comments }) => (
              <ProfilePetItem key={_id}>
                <ProfilePetImg
                  src={`https://pets-shelter-service.onrender.com/${imagePet}`}
                  alt={name}
                />
                <PetInfoBox>
                  <ProfilePetName>
                    Name:<Span>{name}</Span>
                    <BtnDletePostPet>
                      <StyleRiDeleteBin5Fill />
                    </BtnDletePostPet>
                  </ProfilePetName>
                  <ProfilePetbirth>
                    Date of birth:<Span>{birthday}</Span>
                  </ProfilePetbirth>
                  <ProfilePetBreed>
                    Breed:<Span>{breed}</Span>
                  </ProfilePetBreed>
                  <ProfilePetComments>
                    Comments:
                    <Span>{comments}</Span>
                  </ProfilePetComments>
                </PetInfoBox>
              </ProfilePetItem>
            ))}
          </ProfileListPet>
        )}
      </ProfilePetListWrapper>
    </>
  );
};

export default ProfilePetList;
