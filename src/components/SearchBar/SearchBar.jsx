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

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  const handleClearClick = () => {
    setSearchText('');
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
        {searchText ? (
          <ClearButton type="button" onClick={handleClearClick}>
            <AiOutlineCloseCircle size={20} />
          </ClearButton>
        ) : (
          <SearchButton type="submit">
            <SlMagnifier size={20} />
          </SearchButton>
        )}
      </InputContainer>
    </FormSearch>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
