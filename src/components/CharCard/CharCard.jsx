import {
  Card,
  Image,
  Name,
  Species,
  Credentials,
  LinkToChar,
} from './CharCard.styled';

const CharCard = ({ character }) => {
  return (
    <Card>
      <LinkToChar to={`/character/${character.id}`}>
        <Image src={character.image} alt={`image ${character.name}`} />
        <Credentials>
          <Name>{character.name}</Name>
          <Species>{character.species}</Species>
        </Credentials>
      </LinkToChar>
    </Card>
  );
};

export default CharCard;
