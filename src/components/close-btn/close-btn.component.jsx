import React from 'react';
import { CloseBtnContainer, WhiteCloseBtn } from './close-btn.styles';

export const CLOSE_BTN_TYPES = {
  base: 'base',
  white: 'white-close-btn'
};

const getCloseBtn = (type = CLOSE_BTN_TYPES.base) =>
  ({
    [CLOSE_BTN_TYPES.base]: CloseBtnContainer,
    [CLOSE_BTN_TYPES.white]: WhiteCloseBtn
  }[type]);

const CloseBtn = ({ onClickHandler, btnType, imgUrl }) => {
  const CustomCloseBtn = getCloseBtn(btnType);

  return (
    <CustomCloseBtn>
      <img src={imgUrl} alt='close-button' onClick={onClickHandler} />
    </CustomCloseBtn>
  );
};

export default CloseBtn;
