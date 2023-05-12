import styled from 'styled-components';

export const BaseButton = styled.button`
  padding: 12px 18px;
  border: none;
  color: #fff;
  background: #ff0d40;
  text-transform: uppercase;
  outline: none;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #f6b71a;
  }

  @media screen and (max-width: 360px) {
    padding: 10px 15px;
  }
`;

export const BlackButton = styled(BaseButton)`
  background: #000;
`;

export const RoundedButton = styled(BaseButton)`
  padding: 10px 15px;
  margin-top: 20px;
  border-radius: 3px;

  @media screen and (max-width: 425px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 20px;
  }
`;
