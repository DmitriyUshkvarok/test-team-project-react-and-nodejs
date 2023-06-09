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

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  const handleClose = () => {
    setVisible((prev) => !prev);
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
      <Backdrop handleClose={handleClose} visible={visible} />
    </Container>
  );
};
export default ProfilePage;
