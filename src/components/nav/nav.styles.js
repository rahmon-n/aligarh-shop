import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
  position: relative;
  -webkit-transform: translate(-200%);
  transform: translate(-200%);
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;

  ${({ isOpen }) => {
    return (
      isOpen &&
      css`
        -webkit-transform: translate(0);
        transform: translate(0);
        opacity: 1;
        visibility: visible;

        @media (max-width: 980px) {
          -webkit-transform: translate(12%);
          transform: translate(12%);
        }

        @media (max-width: 870px) {
          right: 50%;
          -webkit-transform: translate(50%);
          transform: translate(50%);
        }
      `
    );
  }}

  @media (max-width: 980px) {
    position: absolute;
    z-index: 10;
  }

  @media (max-width: 870px) {
    top: 10px;
    width: 50%;
    text-align: center;
  }

  @media (max-width: 620px) {
    width: 60%;
  }
`;
