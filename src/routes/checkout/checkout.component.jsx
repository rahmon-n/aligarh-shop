import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal
} from '../../features/cart/cart.selector';

import CartItem from '../../components/cart-item/cart-item.component';
import Layout from '../../components/layout/layout.component';
import { CheckoutContainer } from './checkout.styles';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Layout>
      <CheckoutContainer>
        {cartItems.length ? (
          <>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <div>
              <div className='total-sum'>
                Total: <strong>{cartTotal}$</strong>
              </div>
              <PaymentForm />
            </div>
          </>
        ) : (
          <h4 style={{ fontSize: 24, marginBottom: 60 }}>Cart is Empty</h4>
        )}
      </CheckoutContainer>
    </Layout>
  );
};

export default Checkout;
