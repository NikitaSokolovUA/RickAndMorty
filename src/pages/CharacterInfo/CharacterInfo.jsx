import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  BackLink,
  CharLogo,
  CharName,
  Container,
  Info,
  InfoTitle,
  PageContainer,
  Subtitle,
} from './CharacterInfo.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CharacterInfo = () => {
  const [charInfo, setCharInfo] = useState(null);
  const { charId } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/character/${charId}`);

      if (data) {
        setCharInfo(data);
      }
    })();
  }, [charId]);

  return (
    <PageContainer>
      <BackLink to="main">
        <AiOutlineArrowLeft />
        Go back
      </BackLink>
      {charInfo && (
        <Container>
          <CharLogo src={charInfo.image} alt="" />
          <CharName>{charInfo.name}</CharName>
          <Subtitle>Information</Subtitle>
          <InfoTitle>
            Gender <Info>{charInfo.gender}</Info>
          </InfoTitle>
          <InfoTitle>
            Status <Info>{charInfo.status}</Info>
          </InfoTitle>
          <InfoTitle>
            Specie <Info>{charInfo.species}</Info>
          </InfoTitle>
          <InfoTitle>
            Origin <Info>{charInfo.origin.name}</Info>
          </InfoTitle>
          <InfoTitle>
            Type{' '}
            <Info>
              {charInfo.type.length === 0 ? 'Unknown' : charInfo.type}
            </Info>
          </InfoTitle>
        </Container>
      )}
    </PageContainer>
  );
};

export default CharacterInfo;
