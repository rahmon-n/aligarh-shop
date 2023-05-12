import styled, { css } from 'styled-components';

export const CartPopupContainer = styled.div`
  position: relative;
  margin-left: 57px;
  & > span {
    color: #000;
    -webkit-transition: color 0.3s linear;
    transition: color 0.3s linear;
  }
  & > span:hover {
    color: #ff0d40;
  }
  .rate {
    position: absolute;
    top: -10px;
    left: 60px;
    color: #fff;
    background: #ff0d40;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    text-align: center;
    font-size: 12px;
  }

  h3 {
    font-size: 16px;
    text-align: center;
    margin-bottom: 5px;
  }

  .check-out {
    display: block;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    background: #000;
    margin-top: 20px;
    padding: 5px 10px;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    text-decoration: none;
  }
  .check-out:hover {
    background: #f54d56;
  }

  @media (max-width: 620px) {
    margin-left: 20px;
  }

  @media (max-width: 380px) {
    margin-left: 15px;
  }
`;

export const CartPopupList = styled.ul`
  padding: 0 10px;
  list-style: none;
  height: 220px;
  overflow: auto;
`;

export const CartPopupDiv = styled.div`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  right: 50%;
  -webkit-transform: translate(50%);
  transform: translate(50%);
  margin-top: 40px;
  padding: 22px 10px 15px;
  background: #fff;
  width: 255px;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  z-index: 100;

  @media (max-width: 1365px) {
    -webkit-transform: translate(35%);
    transform: translate(35%);
  }

  @media (max-width: 1279px) {
    -webkit-transform: translate(0);
    transform: translate(0);
    right: 0;
  }

  ${({ cartIsOpen }) =>
    cartIsOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const CartPopupTotal = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 15px;
  margin-top: 10px;
  padding: 10px;
  background: #ddd;

  .total__right {
    font-weight: 600;
    color: #f54d56;
  }
`;
