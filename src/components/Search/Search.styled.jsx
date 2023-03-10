import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Container = styled.div`
  position: relative;
  width: 1020px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputSearch = styled.input`
  width: calc(100% - 60px);
  padding: 16px;
  padding-left: 44px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const IconSearch = styled(AiOutlineSearch)`
  position: absolute;
  top: 16px;
  left: 16px;
`;
