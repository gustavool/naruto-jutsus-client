import BoxJutsus from '@/components/BoxJutsus';
import JutsuCard from '@/components/JutsuCard';
import SearchBar from '@/components/SearchBar';
import Base from '../Base';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

const Home = () => (
  <Base>
    <SearchBar />
    <BoxJutsus>
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
      <JutsuCard />
    </BoxJutsus>
  </Base>
);

export default Home;
