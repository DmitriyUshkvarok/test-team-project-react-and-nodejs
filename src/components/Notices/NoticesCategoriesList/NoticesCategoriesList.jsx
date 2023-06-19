import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { WrapListCardPet } from './NoticesCategoriesList.styled';
import PropTypes from 'prop-types';

const NoticesCategoriesList = ({
  cards,
  searchText,
  handleClickModalLearnMore,
}) => {
  return (
    <WrapListCardPet>
      <NoticeCategoryItem
        cards={cards}
        searchText={searchText}
        handleClickModalLearnMore={handleClickModalLearnMore}
      />
    </WrapListCardPet>
  );
};

NoticesCategoriesList.propTypes = {
  cards: PropTypes.array,
  searchText: PropTypes.string,
};

export default NoticesCategoriesList;
