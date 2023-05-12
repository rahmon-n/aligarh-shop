import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../features/cart/cartSlice';
import CartPopupItem from '../cart-popup-item/cart-popup-item.component';

import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  selectIsCartOpen
} from '../../features/cart/cart.selector';

import { useClickOutside } from '../../utils/clickOutSideHook';

import {
  CartPopupContainer,
  CartPopupDiv,
  CartPopupList,
  CartPopupTotal
} from './cart-popup.styles';
import { useRef } from 'react';

const CartPopup = () => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const cartRef = useRef();

  const onClickHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  useClickOutside(cartRef, () => dispatch(setIsCartOpen(false)));

  return (
    <CartPopupContainer ref={cartRef}>
      <span onClick={onClickHandler}>My Cart</span>
      <div className='rate'>{cartCount}</div>

      <CartPopupDiv cartIsOpen={isCartOpen}>
        {cartItems.length ? (
          <>
            <h3 className='shopping-cart__title'>
              Recently added items({cartCount})
            </h3>

            <CartPopupList>
              {cartItems.map((cartItem) => (
                <CartPopupItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </CartPopupList>

            <CartPopupTotal>
              <div className='total__left'>CartSubtotal:</div>
              <div className='total__right'>&#36;{cartTotal}</div>
            </CartPopupTotal>

            <Link className='check-out' to='/checkout'>
              Check out
            </Link>
          </>
        ) : (
          <h3 className='shopping-cart__title'>Cart is Empty</h3>
        )}
      </CartPopupDiv>
    </CartPopupContainer>
  );
};

export default CartPopup;
