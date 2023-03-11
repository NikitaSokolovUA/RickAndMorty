import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharsByName } from 'redux/charSlice/charOperation';
import { Container, IconSearch, InputSearch } from './Search.styled';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharsByName(value));
  }, [value, dispatch]);

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
        required
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  );
};

export default Search;
