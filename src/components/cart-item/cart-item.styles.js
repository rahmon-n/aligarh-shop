import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 15px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  gap: 0 10px;
`;

export const CartItemImage = styled.div`
  width: 195px;
  flex-shrink: 0;

  img {
    width: 100%;
  }

  @media (max-width: 420px) {
    width: 35%;
  }
`;

export const CartItemOptions = styled.div`
  .checkout__title {
    font-size: 21px;
  }
  .checkout__descr {
    font-size: 12px;
    margin-top: 5px;
  }
  .checkout__price {
    margin-top: 15px;
  }

  @media (max-width: 420px) {
    width: 65%;
  }
`;
