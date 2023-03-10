import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.li`
  width: calc((100% - 60px) / 4);

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;

export const LinkToChar = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 168px;
`;
export const Credentials = styled.div`
  width: 100%;
  padding: 16px;
`;

export const Name = styled.p`
  margin: 0;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  color: rgba(0, 0, 0, 0.87);
`;

export const Species = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: 0.25px;

  color: rgba(0, 0, 0, 0.6);
`;
