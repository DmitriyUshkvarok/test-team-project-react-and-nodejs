import { Watch } from 'react-loader-spinner';
import {
  useGetUserPetsQuery,
  useDeleteUserPetsMutation,
} from '../../redux/usersPetsApi/usersPetsApi';
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
  ErrorContent,
  ErrorDesc,
} from './ProfilePetList.styled';

const ProfilePetList = ({ handleClick }) => {
  const { data, error, isLoading } = useGetUserPetsQuery();

  const [deletePet] = useDeleteUserPetsMutation();

  const handleDeletePet = (id) => {
    deletePet(id)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };
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
          <Watch
            height="80"
            width="80"
            radius="48"
            color="var(--accentColor)"
            ariaLabel="watch-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '61px',
            }}
            wrapperClassName=""
            visible={true}
          />
        ) : error || data?.length === 0 ? (
          <ErrorContent>
            <ErrorDesc>
              You have no saved animals. Add pet to your profile please
            </ErrorDesc>
          </ErrorContent>
        ) : (
          <ProfileListPet>
            {data?.map(({ _id, imagePet, name, birthday, breed, comments }) => (
              <ProfilePetItem key={_id}>
                <ProfilePetImg
                  src={`https://pets-shelter-service.onrender.com/${imagePet}`}
                  alt={name}
                />
                <PetInfoBox>
                  <ProfilePetName>
                    Name:<Span>{name}</Span>
                    <BtnDletePostPet onClick={() => handleDeletePet(_id)}>
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
