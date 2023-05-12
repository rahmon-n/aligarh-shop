import styled from 'styled-components';

export const SocialsList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 auto;
  width: 110px;
  list-style: none;
  margin-top: ${(props) => props.marginTop || 0};

  a {
    width: 30px;
    height: 30px;
    border: 1px solid #8b8989;
    border-radius: 50%;
    display: block;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
  a:hover {
    border: 1px solid #fff;
  }
`;

export const SocialIcon = styled.svg`
  width: 100%;
  height: 100%;
  padding: 6px;
  fill: #8b8989;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  &:hover {
    fill: #fff;
  }
`;
