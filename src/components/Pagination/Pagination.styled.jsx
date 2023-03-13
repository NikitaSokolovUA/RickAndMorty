import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 30px);
  padding: 0 20px;
`;

export const Paginate = styled(ReactPaginate).attrs({
  className: 'container',
  activeClassName: 'item active ',
  breakClassName: 'item break-me ',
  disabledClassName: 'disabled-page',
  nextClassName: 'item next ',
  pageClassName: 'item pagination-page ',
  previousClassName: 'item previous',
})`
  &.container {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 40px;
    justify-content: center;
    list-style-type: none;
    position: relative;
    width: 500px;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    color: black;
    font-size: 14px;
    cursor: pointer;
  }

  .disabled-page {
    color: #808e9b;
  }

  .active {
    border: solid 1px #ff751d;
    border-radius: 40px;
    color: #ff751d;
  }

  .next {
    border-left: solid 1px #808e9b;
    font-size: 4px;
    height: 40px;
    position: absolute;
    right: 0;
    width: 50px;

    :hover,
    :focus {
      color: #ff751d;
    }
  }

  .pagination-page {
    font-weight: 700;
  }

  .previous {
    border-right: solid 1px #808e9b;
    font-size: 4px;
    height: 40px;
    left: 0;
    position: absolute;
    width: 50px;

    :hover,
    :focus {
      color: #ff751d;
    }
  }
`;
