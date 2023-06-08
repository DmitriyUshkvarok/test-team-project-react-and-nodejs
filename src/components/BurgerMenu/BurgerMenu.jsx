import { StyledHeaderBurger, StyledBurger } from './BurgerMenu.styled';
import { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
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
      {/* <Menu isOpen={isOpen} onClick={toggleMenu}></Menu> */}
    </>
  );
};
export default BurgerMenu;
