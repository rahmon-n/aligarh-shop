import styled from 'styled-components';

export const DirectoryItemContainer = styled.div`
  flex: 1 1 auto;
  min-width: 30%;
  height: 250px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #e9e6e6;
  margin: 0 10px 15px;
  padding-top: 10px;

  h4 {
    margin-bottom: 5px;

    color: #000;

    font-size: 19px;
    font-weight: 500;
    text-transform: uppercase;
  }

  div {
    text-align: center;
    height: 190px;
    overflow: hidden;

    img {
      height: 100%;
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
    }

    :hover img {
      -webkit-transform: scale(1.1, 1.1);
      transform: scale(1.1, 1.1);
    }
  }
`;
