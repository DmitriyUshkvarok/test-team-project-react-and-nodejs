import { GrClose } from 'react-icons/gr';
import ProfileModal from '../ContentModal/ProfileModal/ProfileModal';
import { BtnClose } from './Modal.styled';
import { ModalContainer } from '../Backdrop/Backdrop.styled';

const Modal = ({ handleClose }) => {
  return (
    <ModalContainer>
      <BtnClose onClick={handleClose}>
        <GrClose size={16} />
      </BtnClose>
      <ProfileModal />
    </ModalContainer>
  );
};

export default Modal;
