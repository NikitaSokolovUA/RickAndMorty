import {
  Card,
  Image,
  Name,
  Species,
  Credentials,
  LinkToChar,
} from './CharCard.styled';

const CharCard = ({ character }) => {
  console.log(character);

  return (
    <Card>
      <LinkToChar to="/character">
        <Image src={character.image} alt="" />
        <Credentials>
          <Name>{character.name}</Name>
          <Species>{character.species}</Species>
        </Credentials>
      </LinkToChar>
    </Card>
  );
};

export default CharCard;
