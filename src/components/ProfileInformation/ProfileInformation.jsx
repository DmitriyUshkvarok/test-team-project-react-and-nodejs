import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SectionProfileInfo,
  ProfileUserBox,
  InfoUserTitle,
  ProfileInfoWrapper,
  ProfilePhotoBlock,
  PhotoUser,
  LabelEditPhoto,
  InputEditPhoto,
  StyleMdAddAPhoto,
  BtnSaveFotoUser,
  SpanEditPhoto,
  ProfileInfoList,
  ProfileInfoItem,
  LabelInfo,
  IputInfoContainer,
  InputInfo,
  LogoutBlock,
  Span,
  IconInfoUserContainer,
  SpanInfoUser,
  StyleHiPencil,
  StyleHiCheck,
  StyleTbLogout,
} from './ProfileInformation.styled';
import Notiflix from 'notiflix';
import { GiSave } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import {
  useChangeProfileAvatarMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from '../../redux/profileApi/profileApi';

const ProfileInformation = () => {
  const [editing, setEditing] = useState({
    name: false,
    email: false,
    birthday: false,
    phone: false,
    location: false,
  });

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showSaveButton, setShowSaveButton] = useState(false);

  const [updateAvatar, { isLoading: isAvatarLoading }] =
    useChangeProfileAvatarMutation();
  const { data: currentUser } = useGetCurrentUserQuery();
  const [updateUser] = useUpdateUserMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);
    setShowSaveButton(true);
  };

  const handleUpdateAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append('avatar', selectedAvatar);
      await updateAvatar(formData);
      setShowSaveButton(false);
    } catch (error) {
      console.log(error);
    }
    // }
  };

  const handleUpdateUser = async (fieldName) => {
    console.log('fieldName:', fieldName);
    console.log('inputValue:', inputValue);
    try {
      const data = {
        [fieldName]: inputValue,
      };
      await updateUser(data);
      setEditing((prevState) => ({
        ...prevState,
        [fieldName]: false,
      }));
    } catch (error) {
      // Обработка ошибки
      console.log(error);
    }
  };

  const handleLogOut = () => {
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      () => {
        dispatch(authOperation.logOut());
        navigate('/login');
      },
      () => {}
    );
  };

  const handleEditClick = (fieldName) => {
    setEditing((prevState) => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  return (
    <>
      <SectionProfileInfo>
        <ProfileUserBox>
          <InfoUserTitle>My information:</InfoUserTitle>
          <ProfileInfoWrapper>
            <ProfilePhotoBlock>
              <PhotoUser
                src={
                  selectedAvatar
                    ? URL.createObjectURL(selectedAvatar)
                    : currentUser?.avatarURL ||
                      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
                }
                alt=""
              ></PhotoUser>
              <LabelEditPhoto htmlFor="inputFile">
                <StyleMdAddAPhoto size={30} />
                <SpanEditPhoto>Edit Photo</SpanEditPhoto>
              </LabelEditPhoto>
              <InputEditPhoto
                name="avatar"
                type="file"
                accept="image/*"
                id="inputFile"
                onChange={handleAvatarChange}
              />
              {showSaveButton && (
                <BtnSaveFotoUser onClick={handleUpdateAvatar}>
                  {isAvatarLoading ? (
                    'Loading...'
                  ) : (
                    <>
                      <GiSave
                        size={20}
                        color="var(--accentColor)"
                        style={{ marginRight: '5px' }}
                      />
                      Save
                    </>
                  )}
                </BtnSaveFotoUser>
              )}
            </ProfilePhotoBlock>
            <ProfileInfoList>
              <ProfileInfoItem>
                <LabelInfo>Name:</LabelInfo>
                <IputInfoContainer>
                  {editing.name ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="name"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{currentUser?.name}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.name ? (
                    <StyleHiCheck onClick={() => handleUpdateUser('name')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('name')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>Email:</LabelInfo>
                <IputInfoContainer>
                  {editing.email ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="email"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{currentUser?.email}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.email ? (
                    <StyleHiCheck onClick={() => handleUpdateUser('email')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('email')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>Birthday:</LabelInfo>
                <IputInfoContainer>
                  {editing.birthday ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="birthday"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>00.00.0000</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.birthday ? (
                    <StyleHiCheck
                      onClick={() => handleUpdateUser('birthday')}
                    />
                  ) : (
                    <StyleHiPencil
                      onClick={() => handleEditClick('birthday')}
                    />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>Phone:</LabelInfo>
                <IputInfoContainer>
                  {editing.phone ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="phone"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{currentUser?.phone}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.phone ? (
                    <StyleHiCheck onClick={() => handleUpdateUser('phone')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('phone')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>City:</LabelInfo>
                <IputInfoContainer>
                  {editing.location ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="location"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{currentUser?.location}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.location ? (
                    <StyleHiCheck
                      onClick={() => handleUpdateUser('location')}
                    />
                  ) : (
                    <StyleHiPencil
                      onClick={() => handleEditClick('location')}
                    />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
            </ProfileInfoList>
            <LogoutBlock onClick={handleLogOut}>
              <StyleTbLogout />
              <Span>Log Out</Span>
            </LogoutBlock>
          </ProfileInfoWrapper>
        </ProfileUserBox>
      </SectionProfileInfo>
    </>
  );
};

export default ProfileInformation;
