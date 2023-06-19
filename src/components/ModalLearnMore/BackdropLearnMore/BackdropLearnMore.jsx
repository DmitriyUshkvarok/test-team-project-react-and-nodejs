import ModalMore from '../ModalMore/ModalMore';
import { BackdropContainer } from './BackdropLearnMore.styled';

const BackdropLearnMore = ({
  visibleMore,
  handleMoreClose,

  modalLearnMore,
  cardFind,
}) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleMoreClose();
    }
  };

  return (
    <BackdropContainer
      onClick={handleBackdropClick}
      className={visibleMore ? '' : 'is-hidden'}
    >
      <ModalMore
        handleMoreClose={handleMoreClose}
        modalLearnMore={modalLearnMore}
        cardFind={cardFind}
      />
    </BackdropContainer>
  );
};

export default BackdropLearnMore;
