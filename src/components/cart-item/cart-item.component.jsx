import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../features/cart/cart.selector';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../features/cart/cartSlice';

import { CartItemContainer, CartItemImage, CartItemOptions } from './cart-item.styles';
import Button, { BUTTON_TYPES } from '../button/button.component';

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price, descr, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CartItemContainer>
      <CartItemImage>
        <img src={imageUrl} alt={name} />
      </CartItemImage>

      <CartItemOptions>
        <h1 className='checkout__title'>{name}</h1>
        <p className='checkout__descr'>{descr}</p>
        <div className='price checkout__price'>
          <span className='price_actual'>&#36;{price}</span>
        </div>

        <div className='single__options-wrapper'>
          <article className='product-qty'>
            <label htmlFor='quantity'> quantity: </label>
            <span>
              <button onClick={removeItemHandler} className='btn_dec-inc'>
                -
              </button>
              <input
                name='quantity'
                id='quantity'
                autoComplete='off'
                maxLength='3'
                value={quantity}
                readOnly
              />
              <button onClick={addItemHandler} className='btn_dec-inc'>
                +
              </button>
            </span>
          </article>
        </div>
        <Button buttonType={BUTTON_TYPES.rounded} onClick={clearItemHandler}>
          delete
        </Button>
      </CartItemOptions>
    </CartItemContainer>
  );
};

export default CartItem;
