// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharsByName } from 'redux/charSlice/charOperation';
import { selectSearchValue } from 'redux/charSlice/charSelectors';
import { changePage, changeSearchValue } from 'redux/charSlice/charSlice';
import { Container, IconSearch, InputSearch } from './Search.styled';

const Search = () => {
  const value = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeSearchValue(e.target.value));
    dispatch(fetchCharsByName(e.target.value));
    dispatch(changePage(null));
  };

  return (
    <Container>
      <IconSearch size={17} color="rgba(0, 0, 0, 0.54)" />
      <InputSearch
        placeholder="Filter by name..."
        type="text"
        name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={value}
        onChange={handleChange}
        required
      />
    </Container>
  );
};

export default Search;
