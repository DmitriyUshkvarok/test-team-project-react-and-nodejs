import { useState } from 'react';
import { useSearchPetsByTitleQuery } from '../../../redux/searchPetsApi/searchPetsApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import SearchBar from '../../SearchBar/SearchBar';

const NoticesSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [titleNotFound, setTitleNotFound] = useState(false);

  const { data, isError } = useSearchPetsByTitleQuery(searchText);
  console.log('Дані про пошук тварин: NoticesSearch 13рядок', data);

  useEffect(() => {
    setTitleNotFound(isError);
  }, [isError]);

  useEffect(() => {
    if (titleNotFound) {
      toast.error('Title not found.');
    }
  }, [titleNotFound]);

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      {/*      
        {isLoading ? (
          <p>Loading...</p>
        ) : (
         
          data */}
    </>
  );
};

export default NoticesSearch;
