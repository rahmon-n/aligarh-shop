import styled from 'styled-components';

export const CloseBtnContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const WhiteCloseBtn = styled(CloseBtnContainer)`
  top: 5px;
  left: 0;
  width: 25px;
  height: 25px;

  img {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 870px) {
    top: 25px;
  }
`;
