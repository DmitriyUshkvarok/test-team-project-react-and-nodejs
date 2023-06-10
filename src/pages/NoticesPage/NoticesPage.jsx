import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from '../../components/FilterPanel/FilterPanel';
import NoticesSearch from '../../components/Notices/NoticesSearch/NoticesSearch';

const NoticesPage = () => {
  return (
    <div>
      <h2>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav />
      AddNoticeButton
      <NoticesCategoriesList />
    </div>
  );
};

export default NoticesPage;
