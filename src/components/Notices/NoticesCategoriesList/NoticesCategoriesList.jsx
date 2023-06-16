import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { WrapListCardPet } from './NoticesCategoriesList.styled';
import PropTypes from 'prop-types';

const NoticesCategoriesList = ({ cards }) => {
  return (
    <WrapListCardPet>
      <NoticeCategoryItem cards={cards} />
    </WrapListCardPet>
  );
};

NoticesCategoriesList.propTypes = {
  cards: PropTypes.array,
};

export default NoticesCategoriesList;
