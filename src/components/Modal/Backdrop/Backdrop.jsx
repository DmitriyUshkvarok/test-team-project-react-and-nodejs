import Modal from '../Modal/Modal';
import { BackdropContainer } from './Backdrop.styled';

const Backdrop = ({ visible, handleClose, profileModal, petsModal }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <BackdropContainer
      onClick={handleBackdropClick}
      className={visible ? '' : 'is-hidden'}
    >
      <Modal
        petsModal={petsModal}
        profileModal={profileModal}
        handleClose={handleClose}
      />
    </BackdropContainer>
  );
};

export default Backdrop;
