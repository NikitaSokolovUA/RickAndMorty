import CharCard from 'components/CharCard';
import Pagination from 'components/Pagination';
import { useSelector } from 'react-redux';
import { selectSortCharacter } from 'redux/charSlice/charSelectors';
import { List, ListContainer } from './CharList.styled';

const CharList = () => {
  const characters = useSelector(selectSortCharacter);

  return (
    <>
      <ListContainer>
        {characters && (
          <List>
            {characters.map(character => (
              <CharCard key={character.id} character={character} />
            ))}
          </List>
        )}
      </ListContainer>
      <Pagination />
    </>
  );
};

export default CharList;
