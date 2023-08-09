import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  padding-top: 37px;
`;

export const HeaderWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const BurgerButton = styled.button`
  background: transparent;
  border: none;

  &:active {
    transform: scale(1.1);
  }
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;

  a {
    color: #000;
    text-decoration: none;
  }
`;
