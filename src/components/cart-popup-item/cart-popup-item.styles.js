import styled from 'styled-components';

export const PopupListItem = styled.li`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
  padding-right: 12px;
  margin-top: 10px;
`;

export const PopupItemImage = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  margin-right: 6%;
  border: 1px solid #e0e0e0;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const PopupItemContent = styled.div`
  h4 {
    font-size: 13px;
    font-weight: 400;
  }

  article {
    margin-top: 10px;
  }
  article span {
    color: #f54d56;
  }
`;
