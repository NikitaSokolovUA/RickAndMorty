import CharList from 'components/CharList';
import Search from 'components/Search';
import { HeroImg } from './Main.styled';

const Main = () => {
  return (
    <div>
      <HeroImg src={process.env.PUBLIC_URL + '/Hero.png'} alt="" />
      <Search />
      <CharList />
    </div>
  );
};

export default Main;
