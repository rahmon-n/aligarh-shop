import styled, { css } from 'styled-components';

export const StyledLayout = styled.div`
  padding: 80px 0;

  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 30px;
  }

  ${({ isMain }) =>
    isMain &&
    css`
      margin-top: -80px;
      padding: 0 0 80px 0;

      @media (max-width: 768px) {
        margin-top: 5px;
      }
    `}

  @media (max-width: 768px) {
    .container {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    padding: 50px 0;
  }

  @media (max-width: 425px) {
    padding-top: 25px;
  }
`;
