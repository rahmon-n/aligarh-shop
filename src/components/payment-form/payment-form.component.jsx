import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton
} from './payment-form.styles';

import { selectCurrentUser } from '../../features/user/user.selector';
import { selectCartTotal } from '../../features/cart/cart.selector';

const ifValidCardDetails = (card) => card !== null;

const PaymentForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    setIsPaymentProcessing(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then((res) => res.json());

    const { client_secret } = response.paymentIntent;

    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCardDetails(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
          email: currentUser ? currentUser.email : null
        }
      }
    });

    setIsPaymentProcessing(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton isLoading={isPaymentProcessing}>Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
