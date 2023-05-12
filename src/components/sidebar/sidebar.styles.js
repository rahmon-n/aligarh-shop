import styled from 'styled-components';

export const SidebarContainer = styled.div`
  flex-shrink: 0;
  width: 225px;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;

    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgb(227 218 218) 0px 1px 12px;

    z-index: 2;
  }

  @media (max-width: 550px) {
    flex-shrink: 0;
    overflow-x: auto;
  }
`;
