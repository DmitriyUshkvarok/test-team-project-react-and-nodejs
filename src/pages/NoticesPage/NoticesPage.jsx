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

const NoticesPage = () => {
  const [visible, setVisible] = useState(false);
  const [petsModal, setPetsModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  return (
    <ContainerNav>
      <h2>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav />
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
      <NoticesCategoriesList />
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
