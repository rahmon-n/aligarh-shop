import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 35px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 428px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 80%);
    justify-content: center;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 25px;
  text-align: center;
`;
