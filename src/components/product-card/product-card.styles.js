import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #dadada;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 60%;
  }
`;

export const ProductCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  padding-bottom: 10px;

  h5 {
    display: flex;
    justify-content: space-between;

    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  p {
    margin-top: 10px;
    font-size: 13px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;
    max-height: 32px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
