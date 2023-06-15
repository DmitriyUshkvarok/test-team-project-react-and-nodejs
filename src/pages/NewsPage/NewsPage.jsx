import {
  useGetFetchNewsQuery,
  useGetFetchNewsTitleQuery,
} from '../../redux/newsApi/newsApi';
import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { toast } from 'react-toastify';
import {
  NewsTitle,
  NewsList,
  NewsListItem,
  NewsImg,
  NewsItemTitle,
  NewsItemDescription,
  BottomItemPanel,
  StyleDatePost,
  StyleReadMore,
} from './NewsPage.styled';
import LoaderMini from '../../components/LoaderMini/LoaderMini';

const NewsPage = () => {
  const [showLoadMore, setShowLoadMore] = useState({});
  const [hiddenReadMore, setHiddenReadMore] = useState({});
  const [searchText, setSearchText] = useState('');
  const [titleNotFound, setTitleNotFound] = useState(false);

  const { error, isLoading } = useGetFetchNewsQuery({
    title: searchText,
  });

  const { data: title, isError } = useGetFetchNewsTitleQuery(searchText);

  useEffect(() => {
    setTitleNotFound(isError);
  }, [isError]);

  useEffect(() => {
    if (titleNotFound) {
      toast.error('Title not found.');
    }
  }, [titleNotFound]);

  const MAX_DESC_LENGTH = 184;

  const handleClickReadMore = (postId) => {
    setShowLoadMore((prevState) => ({
      ...prevState,
      [postId]: true,
    }));
    setHiddenReadMore((prevState) => ({
      ...prevState,
      [postId]: false,
    }));
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <>
      <NewsTitle>News</NewsTitle>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      <NewsList>
        {isLoading ? (
          <LoaderMini />
        ) : (
          title &&
          title.map(({ data, desc, image, _id, title }) => {
            const dateObj = new Date(data);
            const day = dateObj.getDate();
            const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
            const year = dateObj.getFullYear();

            const formattedDate = `${day}/${month}/${year}`;

            return (
              <NewsListItem key={_id}>
                <NewsImg
                  src={`https://pets-shelter-service.onrender.com/${image}`}
                  alt={title}
                />
                <NewsItemTitle>{title}</NewsItemTitle>
                <NewsItemDescription>
                  {showLoadMore[_id]
                    ? desc
                    : `${desc.slice(0, MAX_DESC_LENGTH)}...`}
                </NewsItemDescription>
                <BottomItemPanel>
                  <StyleDatePost>{formattedDate}</StyleDatePost>
                  {!showLoadMore[_id] && (
                    <StyleReadMore
                      onClick={() => handleClickReadMore(_id)}
                      hidden={hiddenReadMore[_id]}
                    >
                      Read more
                    </StyleReadMore>
                  )}
                </BottomItemPanel>
              </NewsListItem>
            );
          })
        )}
      </NewsList>
    </>
  );
};

export default NewsPage;
