import SearchBar from '@/components/SearchBar';
import Base from '../Base';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

const Home = () => (
  <Base>
    <SearchBar />
  </Base>
);

export default Home;
