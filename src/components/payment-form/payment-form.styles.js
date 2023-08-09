import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 300px;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  h2 {
    margin-bottom: 15px;
  }

   @media screen and (max-width: 600px) {
    min-width: 100%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
