import BoxJutsus from '@/components/BoxJutsus';
import FilterSidebar from '@/components/FilterSidebar';
import JutsuCard from '@/components/JutsuCard';
import SearchBar from '@/components/SearchBar';

import Base from '../Base';
import * as S from './styles';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

const Home = () => {
  return (
    <Base>
      <S.Container>
        <FilterSidebar />
        <S.Content>
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
        </S.Content>
      </S.Container>
    </Base>
  );
};

export default Home;
