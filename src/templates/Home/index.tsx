import BoxJutsus from '@/components/BoxJutsus';
import Checkbox from '@/components/Checkbox';
import JutsuCard from '@/components/JutsuCard';
import SearchBar from '@/components/SearchBar';
import Base from '../Base';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

const Home = () => (
  <Base>
    <SearchBar />
    <Checkbox label="teste" labelFor="teste" />
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
