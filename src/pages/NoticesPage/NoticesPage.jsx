import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from '../../components/FilterPanel/FilterPanel';
import Backdrop from '../../components/Modal/Backdrop/Backdrop';
import SearchBar from '../../components/SearchBar/SearchBar';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import {
  Title,
  ContainerNav,
  BtnAdd,
  WrapIcon,
  TitleBtnMobile,
  BoxCategoriesAddBtn,
} from './NoticesPage.styled';
import { useGetPetsQuery } from '../../redux/petsApi/petsApi';
import authSelector from '../../redux/auth/authSelectors';
import { useSearchPetsByTitleQuery } from '../../redux/searchPetsApi/searchPetsApi';
import BackdropLearnMore from '../../components/ModalLearnMore/BackdropLearnMore/BackdropLearnMore';

const NoticesPage = () => {
  const [visible, setVisible] = useState(false);
  const [petsModal, setPetsModal] = useState(false);

  const [visibleMore, setVisibleMore] = useState(false);
  const [modalLearnMore, setModalLearnMore] = useState(false);
  const [cardFind, setCardFind] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const { data: allCards } = useGetPetsQuery({
    title: searchText,
  });

  const { data: titlePetsSearch } = useSearchPetsByTitleQuery(searchText);

  const userId = useSelector(authSelector.getid);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //

  const handleClick = () => {
    setVisible((prev) => !prev);
    setPetsModal(true);
  };

  const handleClose = () => {
    setVisible((prev) => !prev);
  };

  const handleClickModalLearnMore = (id) => {
    setVisibleMore((prev) => !prev);
    setModalLearnMore(true);
    const res = allCards.find(({ _id }) => _id === id);
    setCardFind(res);
  };

  const handleMoreClose = () => {
    setVisibleMore((prev) => !prev);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);

    const hasMatch = filteredCards.some((card) =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );
    if (!hasMatch) {
      toast.info('No results found');
    }
  };

  const handleClear = () => {
    setSearchText('');
  };

  const handleFilterChange = (statusName) => {
    if (statusName === 'favorite ads') {
      setShowFavorites(true);
    } else {
      setSelectedStatus(statusName);
      setShowFavorites(false);
    }
  };

  if (!allCards) {
    return null;
  }

  if (!titlePetsSearch) {
    return null;
  }

  let filteredCards = allCards;

  if (selectedStatus) {
    filteredCards = filteredCards.filter((card) => {
      if (selectedStatus === 'my ads' && card.owner !== userId) {
        return false;
      }
      if (selectedStatus !== 'my ads' && card.status !== selectedStatus) {
        return false;
      }
      if (showFavorites && (!card.favorite || card.owner !== userId)) {
        return false;
      }
      return true;
    });
  }

  return (
    <ContainerNav>
      <Title>Find your favorite pet</Title>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />

      <BoxCategoriesAddBtn>
        <NoticesCategoriesNav
          onFilterChange={handleFilterChange}
          userId={userId}
        />

        <BtnAdd onClick={handleClick}>
          <p
            style={{
              display:
                windowWidth >= 319 && windowWidth < 767 ? 'none' : 'block',
            }}
          >
            Add pet
          </p>
          <WrapIcon>
            <AiOutlinePlus
              size={windowWidth <= 320 ? '22px' : '16px'}
              color="var(--whiteColor)"
            />
            <TitleBtnMobile
              style={{
                display:
                  windowWidth >= 319 && windowWidth < 767 ? 'block' : 'none',
              }}
            >
              Add pet
            </TitleBtnMobile>
          </WrapIcon>
        </BtnAdd>
      </BoxCategoriesAddBtn>
      <NoticesCategoriesList
        cards={filteredCards}
        searchText={searchText}
        handleClickModalLearnMore={handleClickModalLearnMore}
      />
      <Backdrop
        handleClose={handleClose}
        handleClick={handleClick}
        // modalLearnMore={modalLearnMore}
        // cardFind={cardFind}
        petsModal={petsModal}
        visible={visible}
      />
      <BackdropLearnMore
        handleMoreClose={handleMoreClose}
        modalLearnMore={modalLearnMore}
        cardFind={cardFind}
        visibleMore={visibleMore}
      />
    </ContainerNav>
  );
};

export default NoticesPage;
