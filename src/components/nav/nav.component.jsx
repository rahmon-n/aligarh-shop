import React from 'react';
import NavList from '../nav-list/nav-list.component';

import { StyledNav } from './nav.styles';

import { LIST_DIRECTIONS } from '../nav-list/nav-list.component';
import CloseBtn, { CLOSE_BTN_TYPES } from '../close-btn/close-btn.component';

const Nav = ({ isOpen, onClose }) => {
  return (
    <StyledNav isOpen={isOpen}>
      <NavList direction={LIST_DIRECTIONS.row} />
      <CloseBtn
        onClickHandler={onClose}
        imgUrl={'/images/icons/close-white.png'}
        btnType={CLOSE_BTN_TYPES.white}
      />
    </StyledNav>
  );
};

export default Nav;
