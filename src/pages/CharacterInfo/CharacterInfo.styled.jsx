import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  padding: 24px 0;
`;

export const BackLink = styled(Link)`
  margin-left: 54px;
  display: flex;
  align-items: center;
  gap: 20px;

  text-decoration: none;

  color: #000000;
`;

export const Container = styled.div`
  width: 413px;
  margin-left: auto;
  margin-right: auto;
`;

export const CharLogo = styled.img`
  width: 300px;
  height: 300px;
  display: block;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
`;

export const CharName = styled.h2`
  margin-top: 18px;
  font-family: 'Roboto';

  font-weight: 400;
  font-size: 48px;
  line-height: calc(56 / 48);

  text-align: center;

  color: #081f32;
`;

export const Subtitle = styled.p`
  margin-top: 48px;
  margin-bottom: 57px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);

  letter-spacing: 0.15px;
  text-align: center;

  color: #8e8e93;
`;

export const InfoTitle = styled.p`
  position: relative;

  padding-top: 9px;
  padding-bottom: 12px;
  padding-left: 16px;

  font-family: 'Roboto';

  font-weight: 700;
  font-size: 16px;
  line-height: calc(24 / 16);

  letter-spacing: 0.15px;

  color: #081f32;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 1px;
    background-color: rgba(33, 33, 33, 0.08);
  }
`;

export const Info = styled.span`
  display: block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  letter-spacing: 0.25px;

  color: #6e798c;
`;
