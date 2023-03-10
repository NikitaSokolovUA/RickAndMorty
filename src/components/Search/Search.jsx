import { Container, IconSearch, InputSearch } from './Search.styled';

const Search = () => {
  return (
    <Container>
      <IconSearch size={17} color="rgba(0, 0, 0, 0.54)" />
      <InputSearch placeholder="Filter by name..." />
    </Container>
  );
};

export default Search;
