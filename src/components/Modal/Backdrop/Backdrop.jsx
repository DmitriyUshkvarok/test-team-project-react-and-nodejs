import Modal from '../Modal/Modal';
import { BackdropContainer } from './Backdrop.styled';

const Backdrop = ({ visible, handleClose }) => {
  return (
    <BackdropContainer className={visible ? '' : 'is-hidden'}>
      <Modal handleClose={handleClose} />
    </BackdropContainer>
  );
};

export default Backdrop;
