import styled, { css } from 'styled-components';

export const StyledIntro = styled.div`
  min-height: 40vh;
  background: url('/images/banner.png') center top/cover no-repeat;

  ${({ isMain }) => {
    return (
      isMain &&
      css`
        min-height: 1100px;

        @media (max-width: 849px) {
          min-height: 100vh;
        }
      `
    );
  }}
`;

export const IntroTitle = styled.h1`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 70px;
  font-weight: 400;
  height: 700px;
  color: #fff;

  @media (max-width: 849px) {
    height: 400px;
    font-size: 55px;
    text-align: center;
  }

  @media (max-width: 620px) {
    font-size: 40px;
    height: 340px;
  }

  @media (max-width: 380px) {
    height: 250px;
    font-size: 30px;
  }
`;
