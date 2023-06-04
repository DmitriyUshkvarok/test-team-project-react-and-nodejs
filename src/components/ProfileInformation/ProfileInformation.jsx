import { useState } from 'react';
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

const ProfileInformation = () => {
  const [editing, setEditing] = useState({
    name: false,
    email: false,
    birthday: false,
    phone: false,
    city: false,
  });

  const handleCheckClick = (fieldName) => {
    setEditing((prevState) => ({
      ...prevState,
      [fieldName]: false,
    }));
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
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt=""
              ></PhotoUser>
              <LabelEditPhoto htmlFor="inputFile">
                <StyleMdAddAPhoto size={30} />
                <SpanEditPhoto>Edit Photo</SpanEditPhoto>
              </LabelEditPhoto>
              <InputEditPhoto type="file" accept="image/*" id="inputFile" />
            </ProfilePhotoBlock>
            <ProfileInfoList>
              <ProfileInfoItem>
                <LabelInfo>Name:</LabelInfo>
                <IputInfoContainer>
                  {editing.name ? (
                    <InputInfo autoFocus type="text" name="name" />
                  ) : (
                    <SpanInfoUser>Anna</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.name ? (
                    <StyleHiCheck onClick={() => handleCheckClick('name')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('name')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>Email:</LabelInfo>
                <IputInfoContainer>
                  {editing.email ? (
                    <InputInfo autoFocus type="text" name="email" />
                  ) : (
                    <SpanInfoUser>anna00@gmail.com</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.email ? (
                    <StyleHiCheck onClick={() => handleCheckClick('email')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('email')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>Birthday:</LabelInfo>
                <IputInfoContainer>
                  {editing.birthday ? (
                    <InputInfo autoFocus type="text" name="birthday" />
                  ) : (
                    <SpanInfoUser>00.00.0000</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.birthday ? (
                    <StyleHiCheck
                      onClick={() => handleCheckClick('birthday')}
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
                    <InputInfo autoFocus type="text" name="phone" />
                  ) : (
                    <SpanInfoUser>+38000000000</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.phone ? (
                    <StyleHiCheck onClick={() => handleCheckClick('phone')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('phone')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>City:</LabelInfo>
                <IputInfoContainer>
                  {editing.city ? (
                    <InputInfo autoFocus type="text" name="city" />
                  ) : (
                    <SpanInfoUser>Kiev</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.city ? (
                    <StyleHiCheck onClick={() => handleCheckClick('city')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('city')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
            </ProfileInfoList>
            <LogoutBlock>
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
