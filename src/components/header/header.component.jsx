import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Nav from '../nav/nav.component';
import CartPopup from '../cart-popup/cart-popup.component';
import { BurgerButton, HeaderWrapper, Logo, StyledHeader } from './header.styles';

const Header = () => {
  const [menuState, setMenu] = useState({ isOpen: false });
  const location = useLocation();

  const menuToggleHandler = () => {
    setMenu({
      isOpen: !menuState.isOpen
    });
  };

  const closeMenuHandler = () => {
    setMenu({
      isOpen: false
    });
  };

  useEffect(() => {
    setMenu({
      isOpen: false
    });
  }, [location]);

  return (
    <StyledHeader>
      <Logo>
        <Link to='/'>Aligarh</Link>
      </Logo>

      <Nav isOpen={menuState.isOpen} onClose={closeMenuHandler} />

      <HeaderWrapper>
        <BurgerButton onClick={menuToggleHandler}>
          <img src='/images/icons/menu.png' alt='menu' />
        </BurgerButton>

        <CartPopup />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
