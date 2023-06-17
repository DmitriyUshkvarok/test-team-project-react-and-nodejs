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

const NoticesPage = () => {
  const [visible, setVisible] = useState(false);
  const [petsModal, setPetsModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [searchText, setSearchText] = useState('');

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

  const handleClick = () => {
    setVisible((prev) => !prev);
    setPetsModal(true);
  };

  const handleClose = () => {
    setVisible((prev) => !prev);
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
    setSelectedStatus(statusName);
  };

  if (!allCards) {
    return null;
  }

  if (!titlePetsSearch) {
    return null;
  }

  const filteredCards = selectedStatus
    ? selectedStatus === 'my ads'
      ? allCards.filter((card) => card.owner === userId)
      : allCards.filter((card) => card.status === selectedStatus)
    : allCards;

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
      <NoticesCategoriesList cards={filteredCards} searchText={searchText} />
      <Backdrop
        handleClose={handleClose}
        handleClick={handleClick}
        petsModal={petsModal}
        visible={visible}
      />
    </ContainerNav>
  );
};

export default NoticesPage;
