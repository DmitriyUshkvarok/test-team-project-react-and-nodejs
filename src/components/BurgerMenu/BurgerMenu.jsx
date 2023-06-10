import {
  StyledHeaderBurger,
  StyledBurger,
  MobileMenu,
  MobileAuthAndAccountContainer,
  AuthWrapper,
  ProfileWrapper,
  StyleMobileLinkLogin,
  StyleMobileLinkRegistration,
  StyleMobileLinkAccount,
  MobileNavList,
  MobileListItem,
  StyleLink,
} from './BurgerMenu.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelectors';
import { MdAccountCircle } from 'react-icons/md';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open');
  };

  return (
    <>
      <StyledHeaderBurger>
        <StyledBurger isOpen={isOpen} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </StyledHeaderBurger>
      {isOpen && (
        <MobileMenu isOpen={isOpen} onClick={toggleMenu}>
          <MobileAuthAndAccountContainer>
            {isLoggedIn ? (
              <ProfileWrapper>
                <StyleMobileLinkAccount to="/user">
                  <MdAccountCircle size={20} style={{ marginRight: '12px' }} />{' '}
                  Account
                </StyleMobileLinkAccount>
              </ProfileWrapper>
            ) : (
              <AuthWrapper>
                <StyleMobileLinkLogin to="/login">Login</StyleMobileLinkLogin>
                <StyleMobileLinkRegistration to="/register">
                  Registration
                </StyleMobileLinkRegistration>
              </AuthWrapper>
            )}
          </MobileAuthAndAccountContainer>
          <MobileNavList>
            <MobileListItem>
              <StyleLink to="/news">News</StyleLink>
            </MobileListItem>
            <MobileListItem>
              <StyleLink to="/notices">Find Pet</StyleLink>
            </MobileListItem>
            <MobileListItem>
              <StyleLink to="/friends">Our friends</StyleLink>
            </MobileListItem>
          </MobileNavList>
        </MobileMenu>
      )}
    </>
  );
};
export default BurgerMenu;
