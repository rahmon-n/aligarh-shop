import { ProductCardBody, ProductCardContainer } from './product-card.styles';

import Button, { BUTTON_TYPES } from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../features/cart/cart.selector';
import { addItemToCart } from '../../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price, descr } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />

      <ProductCardBody>
        <h5>
          <span title={name}>
            {name.length > 12 ? `${name.slice(0, 12)}...` : name}
          </span>
          <span
            style={{
              color: '#ff0d40'
            }}
          >
            {price}$
          </span>
        </h5>
        <p title={descr}>{descr}</p>
        <Button buttonType={BUTTON_TYPES.rounded} onClick={addItemHandler}>
          add to card
        </Button>
      </ProductCardBody>
    </ProductCardContainer>
  );
};

export default ProductCard;
