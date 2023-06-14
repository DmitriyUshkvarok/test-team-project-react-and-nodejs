import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from '../../components/FilterPanel/FilterPanel';
import NoticesSearch from '../../components/Notices/NoticesSearch/NoticesSearch';
import Backdrop from '../../components/Modal/Backdrop/Backdrop';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { ContainerNav, BtnAdd, WrapIcon } from './NoticesPage.styled';

const NoticesPage = () => {
  const [visible, setVisible] = useState(false);
  const [petsModal, setPetsModal] = useState(false);

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
        Add pet
        <WrapIcon>
          <AiOutlinePlus size={16} color="var(--whiteColor)" />
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
