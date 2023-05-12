import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;

  margin-top: 50px;
  padding-left: 32px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;

    margin-top: 0;
    padding-left: 0;
  }

  @media (max-width: 550px) {
    justify-content: space-between;

    li {
      flex-shrink: 0;
      margin: 0 20px;

      a {
        line-height: 3em;
      }
    }
  }
`;

export const RowList = styled(List)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: rgba(174, 123, 0, 0.57);
  margin-top: 0;
  padding-left: 0;

  li {
    margin: 15px;
  }
  li a,
  span {
    color: #fff;
    line-height: 2.5em;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  @media (max-width: 870px) {
    display: block;
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 16px;
  line-height: 3.5em;
  text-transform: uppercase;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
