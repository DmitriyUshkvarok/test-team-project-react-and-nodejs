import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from '../../components/FilterPanel/FilterPanel';
import NoticesSearch from '../../components/Notices/NoticesSearch/NoticesSearch';
import Backdrop from '../../components/Modal/Backdrop/Backdrop';
import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  ContainerNav,
  BtnAdd,
  WrapIcon,
  TitleBtnMobile,
} from './NoticesPage.styled';
import { useGetPetsQuery } from '../../redux/petsApi/petsApi';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelectors';

const NoticesPage = () => {
  const [visible, setVisible] = useState(false);
  const [petsModal, setPetsModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const { data: allCards } = useGetPetsQuery();

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

  const handleFilterChange = (statusName) => {
    setSelectedStatus(statusName);
  };

  // const filteredCards = selectedStatus
  //   ? allCards.filter((card) => card.status === selectedStatus)
  //   : allCards;
  // console.log(allCards);

  if (!allCards) {
    return null; // или другое решение, соответствующее вашей логике
  }
  const filteredCards =
    selectedStatus === 'my ads'
      ? allCards.filter((card) => card.owner === userId)
      : allCards.filter((card) => card.status === selectedStatus);
  console.log(allCards);

  return (
    <ContainerNav>
      <h2>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav
        onFilterChange={handleFilterChange}
        userId={userId}
      />
      <BtnAdd onClick={handleClick}>
        <p
          style={{
            display: windowWidth >= 319 && windowWidth < 767 ? 'none' : 'block',
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
      <NoticesCategoriesList cards={filteredCards} />
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
