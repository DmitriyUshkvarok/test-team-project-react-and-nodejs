import Modal from '../Modal/Modal';
import { BackdropContainer } from './Backdrop.styled';

const Backdrop = ({ visible, handleClose, profileModal, petsModal }) => {
  return (
    <BackdropContainer className={visible ? '' : 'is-hidden'}>
      <Modal
        petsModal={petsModal}
        profileModal={profileModal}
        handleClose={handleClose}
      />
    </BackdropContainer>
  );
};

export default Backdrop;
