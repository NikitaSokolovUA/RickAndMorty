import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 100px;

  border-bottom: 1px solid grey;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  cursor: pointer;

  font-style: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;

  color: rgba(0, 0, 0);

  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: 0px 1px 5px #ff751d, 0px 3px 4px #ff751d, 0px 2px 4px #ff751d;
  }
`;

export const Greetings = styled.p`
  font-style: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(30 / 20);

  color: rgba(0, 0, 0, 0.87);
`;
