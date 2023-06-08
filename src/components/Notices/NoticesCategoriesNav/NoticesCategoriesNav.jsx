import { Outlet } from 'react-router-dom';
import { StyledLink, BoxCategories } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  return (
    <>
      <BoxCategories>
        <StyledLink to="sell">sell</StyledLink>

        <StyledLink to="lost-found">lost/found</StyledLink>
        <StyledLink to="for-free">in good hands</StyledLink>

        <StyledLink to="favorite">favorite ads</StyledLink>
        <StyledLink to="own">my ads</StyledLink>
      </BoxCategories>
      <Outlet />
    </>
  );
};
export default NoticesCategoriesNav;

/* - якщо користувач АВТОРИЗОВАНИЙ - в залежності від того, чи додано
      відповідне оголошення в обрані, по кліку користувач додає оголошення в
      обрані або видаляє з них */
