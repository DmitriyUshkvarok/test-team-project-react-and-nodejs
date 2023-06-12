import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from '../../components/FilterPanel/FilterPanel';
import NoticesSearch from '../../components/Notices/NoticesSearch/NoticesSearch';
import Backdrop from '../../components/Modal/Backdrop/Backdrop';
import { useState } from 'react';

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
    <div>
      <h2>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <button onClick={handleClick}>AddNoticeButton</button>
      <NoticesCategoriesList />
      <Backdrop
        handleClose={handleClose}
        handleClick={handleClick}
        petsModal={petsModal}
        visible={visible}
      />
    </div>
  );
};

export default NoticesPage;
