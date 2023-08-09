import styled from 'styled-components';

export const StyledCategoriesList = styled.ul`
  list-style: none;
  border-radius: 5px;
  border: 1px solid #e9e6e6;
  padding: 32px;

  li a {
    color: #000;
    font-size: 12px;
    font-weight: 700;
    line-height: 3.5em;
    text-transform: uppercase;
    text-decoration: none;
  }
  li a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
