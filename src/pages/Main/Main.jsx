import CharList from 'components/CharList';
import Search from 'components/Search';
import { Container, HeroImg } from './Main.styled';

const Main = () => {
  return (
    <Container>
      <HeroImg src={process.env.PUBLIC_URL + '/Hero.png'} alt="" />
      <Search />
      <CharList />
    </Container>
  );
};

export default Main;
