import ProfileInformation from '../../components/ProfileInformation/ProfileInformation';
import ProfilePetList from '../../components/ProfilePetList/ProfilePetList';
import Container from '../../components/Container/Container';
import Backdrop from '../../components/Modal/Backdrop/Backdrop';
import {
  ProfileInformationBox,
  ProfileInformationContainer,
  ProfilePetListContainer,
} from './ProfilePage.styled';
import { useState } from 'react';

const ProfilePage = () => {
  const [visible, setVisible] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
    document.body.classList.add('menu-open');
    setProfileModal(true);
  };

  const handleClose = () => {
    setVisible((prev) => !prev);
    document.body.classList.remove('menu-open');
  };

  return (
    <Container>
      <ProfileInformationBox>
        <ProfileInformationContainer>
          <ProfileInformation />
        </ProfileInformationContainer>
        <ProfilePetListContainer>
          <ProfilePetList handleClick={handleClick} />
        </ProfilePetListContainer>
      </ProfileInformationBox>
      <Backdrop
        profileModal={profileModal}
        handleClose={handleClose}
        visible={visible}
      />
    </Container>
  );
};
export default ProfilePage;
