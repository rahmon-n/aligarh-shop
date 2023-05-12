import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h2 {
    margin-bottom: 25px;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 25px;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 80%);
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  margin: 15px 0;
  padding: 2px 5px;

  color: rgb(255, 13, 64);
  border-bottom: 1px solid rgb(255, 13, 64);

  font-size: 16px;

  width: fit-content;

  transition: all 0.2s linear;

  &:hover {
    color: rgb(246, 183, 26);
    border-bottom: 1px solid rgb(246, 183, 26);
  }
`;
