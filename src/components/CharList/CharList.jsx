import CharCard from 'components/CharCard';
import { useSelector } from 'react-redux';
import { selectCharacters } from 'redux/charSlice/charSelectors';
import { List, ListContainer } from './CharList.styled';

const CharList = () => {
  const characters = useSelector(selectCharacters);

  return (
    <ListContainer>
      <List>
        {characters.map(character => (
          <CharCard key={character.id} character={character} />
        ))}
      </List>
    </ListContainer>
  );
};

export default CharList;
