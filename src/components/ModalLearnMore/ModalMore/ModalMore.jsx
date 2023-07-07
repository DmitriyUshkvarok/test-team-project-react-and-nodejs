import { GrClose } from 'react-icons/gr';

import {
  ModalContainer,
  BtnClose,
} from '../BackdropLearnMore/BackdropLearnMore.styled';
import ModalLearnMore from '../../ModalLearnMore/ModalLearnMore/ModalLearnMore';

const ModalMore = ({ modalLearnMore, handleMoreClose, cardFind }) => {
  return (
    <ModalContainer>
      <BtnClose onClick={() => handleMoreClose()}>
        <GrClose size={18} />
      </BtnClose>
      {modalLearnMore && <ModalLearnMore cardFind={cardFind} />}
    </ModalContainer>
  );
};

export default ModalMore;
