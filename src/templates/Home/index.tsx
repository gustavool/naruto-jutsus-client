import BoxJutsus from '@/components/BoxJutsus';
import FilterBar from '@/components/FilterBar';
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
        <FilterBar />
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
