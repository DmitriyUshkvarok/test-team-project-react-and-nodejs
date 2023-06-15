import {
  useGetUserPetsQuery,
  useDeleteUserPetsMutation,
} from '../../redux/usersPetsApi/usersPetsApi';
import { useState } from 'react';
import {
  LoaderContainer,
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
import LoaderMini from '../LoaderMini/LoaderMini';
import PropTypes from 'prop-types';

const ProfilePetList = ({ handleClick }) => {
  const [isPetDeleted, setIsPetDeleted] = useState(null);

  const { data, error, isLoading } = useGetUserPetsQuery();

  const [deletePet] = useDeleteUserPetsMutation();

  const handleDeletePet = (id) => {
    deletePet(id)
      .then(() => setIsPetDeleted(id))
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
          <LoaderContainer>
            <LoaderMini />
          </LoaderContainer>
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
                  src={
                    imagePet &&
                    `https://pets-shelter-service.onrender.com/${imagePet}`
                  }
                  alt={name}
                />
                <PetInfoBox>
                  <ProfilePetName>
                    Name:<Span>{name}</Span>
                    <BtnDletePostPet onClick={() => handleDeletePet(_id)}>
                      {isPetDeleted === _id ? (
                        'Deleted...'
                      ) : (
                        <StyleRiDeleteBin5Fill />
                      )}
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

ProfilePetList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ProfilePetList;
