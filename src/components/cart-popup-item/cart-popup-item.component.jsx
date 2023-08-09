import { useSelector, useDispatch } from 'react-redux';
import { clearItemFromCart } from '../../features/cart/cartSlice';

import CloseBtn from '../close-btn/close-btn.component';
import {
  PopupItemContent,
  PopupItemImage,
  PopupListItem
} from './cart-popup-item.styles';
import { selectCartItems } from '../../features/cart/cart.selector';

const CartPopupItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const onClearItemHanlder = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <PopupListItem>
      <PopupItemImage>
        <img src={imageUrl} alt={name} />
      </PopupItemImage>
      <PopupItemContent>
        <h4>{name}</h4>
        <article>
          {quantity} x <span>&#36;{price} </span>
        </article>
        <CloseBtn
          imgUrl={'/images/icons/close.png'}
          onClickHandler={onClearItemHanlder}
        />
      </PopupItemContent>
    </PopupListItem>
  );
};

export default CartPopupItem;
