import { useDispatch, useSelector } from 'react-redux';
import {
  selectCountPages,
  selectCurrentPage,
} from 'redux/charSlice/charSelectors';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { Container, Paginate } from './Pagination.styled';
import { changePage } from 'redux/charSlice/charSlice';

const Pagination = ({ listRef }) => {
  const page = useSelector(selectCurrentPage);
  const pageCount = useSelector(selectCountPages);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 550 });

  const handleChange = ({ selected }) => {
    if (selected) {
      dispatch(changePage(selected));
    }
  };

  return (
    <Container>
      <Paginate
        initialPage={page}
        breakLabel={'...'}
        nextLabel={<AiOutlineArrowRight size={16} />}
        onPageChange={handleChange}
        onClick={() =>
          listRef.current.scrollIntoView({
            behavior: 'smooth',
          })
        }
        pageRangeDisplayed={isMobile ? 1 : 2}
        marginPagesDisplayed={isMobile ? 1 : 2}
        pageCount={pageCount ? pageCount : 1}
        previousLabel={<AiOutlineArrowLeft size={16} />}
        renderOnZeroPageCount={null}
      />
    </Container>
  );
};

export default Pagination;
