import { GrClose } from 'react-icons/gr';
import ProfileModal from '../ContentModal/ProfileModal/ProfileModal';
import PetsModal from '../ContentModal/PetsModal/PetsModal';

import { ModalContainer, BtnClose } from '../Backdrop/Backdrop.styled';

const Modal = ({ handleClose, profileModal, petsModal }) => {
  return (
    <ModalContainer>
      <BtnClose onClick={handleClose}>
        <GrClose size={18} />
      </BtnClose>
      {profileModal && <ProfileModal handleClose={handleClose} />}
      {petsModal && <PetsModal handleClose={handleClose} />}
    </ModalContainer>
  );
};

export default Modal;
