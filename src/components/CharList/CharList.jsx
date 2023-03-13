import CharCard from 'components/CharCard';
import Pagination from 'components/Pagination';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectSortCharacter } from 'redux/charSlice/charSelectors';
import { List, ListContainer } from './CharList.styled';

const CharList = () => {
  const characters = useSelector(selectSortCharacter);
  const listRef = useRef(null);

  return (
    <>
      <ListContainer ref={listRef}>
        {characters && (
          <List>
            {characters.map(character => (
              <CharCard key={character.id} character={character} />
            ))}
          </List>
        )}
      </ListContainer>
      <Pagination listRef={listRef} />
    </>
  );
};

export default CharList;
