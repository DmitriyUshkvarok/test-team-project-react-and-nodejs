import { Outlet } from 'react-router-dom';
import { StyledLink, BoxCategories } from './FilterPanel.styled';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelectors';

const NoticesCategoriesNav = () => {
  const isLoggetIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <>
      <BoxCategories>
        <StyledLink to="sell">sell</StyledLink>
        <StyledLink to="lost-found">lost/found</StyledLink>
        <StyledLink to="for-free">in good hands</StyledLink>
        {isLoggetIn && <StyledLink to="favorite">favorite ads</StyledLink>}
        {isLoggetIn && <StyledLink to="own">my ads</StyledLink>}
      </BoxCategories>
      <Outlet />
    </>
  );
};
export default NoticesCategoriesNav;
