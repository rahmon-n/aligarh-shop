import React from 'react';
import { BaseButton, BlackButton, RoundedButton } from './button.styles';

export const BUTTON_TYPES = {
  base: 'base',
  rounded: 'rounded',
  black: 'black'
};

const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.rounded]: RoundedButton,
    [BUTTON_TYPES.black]: BlackButton
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
