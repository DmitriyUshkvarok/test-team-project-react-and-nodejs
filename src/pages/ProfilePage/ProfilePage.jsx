import ProfileInformation from '../../components/ProfileInformation/ProfileInformation';
import ProfilePetList from '../../components/ProfilePetList/ProfilePetList';
import Container from '../../components/Container/Container';
import {
  ProfileInformationBox,
  ProfileInformationContainer,
  ProfilePetListContainer,
} from './ProfilePage.styled';

const ProfilePage = () => {
  return (
    <Container>
      <ProfileInformationBox>
        <ProfileInformationContainer>
          <ProfileInformation />
        </ProfileInformationContainer>
        <ProfilePetListContainer>
          <ProfilePetList />
        </ProfilePetListContainer>
      </ProfileInformationBox>
    </Container>
  );
};
export default ProfilePage;
