import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormSearch,
  InputContainer,
  InputSearch,
  SearchButton,
  ClearButton,
} from './SearchBar.styled';
import { SlMagnifier } from 'react-icons/sl';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

const SearchBar = ({ onSearch, onClear }) => {
  const [searchText, setSearchText] = useState('');
  const [showClearButton, setShowClearButton] = useState(false);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
    setShowClearButton(true);
    if (!searchText) {
      toast.error('enter a search query');
      setShowClearButton(false);
    }
  };

  const handleClearClick = () => {
    setSearchText('');
    setShowClearButton(false);
    onClear();
  };

  return (
    <FormSearch onSubmit={handleSubmit}>
      <InputContainer>
        <InputSearch
          type="text"
          name="search"
          placeholder="Search"
          value={searchText}
          onChange={handleInputChange}
        />
        {showClearButton ? (
          <ClearButton type="button" onClick={handleClearClick}>
            <AiOutlineCloseCircle size={20} />
          </ClearButton>
        ) : (
          <SearchButton type="submit" onSubmit={handleSubmit}>
            <SlMagnifier size={20} />
          </SearchButton>
        )}
      </InputContainer>
    </FormSearch>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default SearchBar;
