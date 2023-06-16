import { Outlet } from 'react-router-dom';
import { StyledLink, BoxCategories } from './FilterPanel.styled';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelectors';
import PropTypes from 'prop-types';

const NoticesCategoriesNav = ({ onFilterChange }) => {
  const isLoggetIn = useSelector(authSelector.getIsLoggedIn);

  const handleItemClick = (statusName) => {
    onFilterChange(statusName);
  };

  return (
    <>
      <BoxCategories>
        <StyledLink onClick={() => handleItemClick('sell')}>sell</StyledLink>
        <StyledLink onClick={() => handleItemClick('lost/found')}>
          lost/found
        </StyledLink>
        <StyledLink onClick={() => handleItemClick('in good hands')}>
          in good hands
        </StyledLink>
        {isLoggetIn && (
          <StyledLink onClick={() => handleItemClick()}>
            favorite ads
          </StyledLink>
        )}
        {isLoggetIn && (
          <StyledLink onClick={() => handleItemClick('my ads')}>
            my ads
          </StyledLink>
        )}
      </BoxCategories>
      <Outlet />
    </>
  );
};

NoticesCategoriesNav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default NoticesCategoriesNav;
