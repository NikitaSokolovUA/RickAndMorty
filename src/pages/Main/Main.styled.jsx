import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 30px);
  padding: 0 15px;
`;

export const HeroImg = styled.img`
  display: block;
  margin-top: 86px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;
