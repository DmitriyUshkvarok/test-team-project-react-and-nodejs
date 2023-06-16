import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { WrapListCardPet } from './NoticesCategoriesList.styled';
import PropTypes from 'prop-types';

const NoticesCategoriesList = ({ cards, searchText }) => {
  return (
    <WrapListCardPet>
      <NoticeCategoryItem cards={cards} searchText={searchText} />
    </WrapListCardPet>
  );
};

NoticesCategoriesList.propTypes = {
  cards: PropTypes.array,
  searchText: PropTypes.string,
};

export default NoticesCategoriesList;
