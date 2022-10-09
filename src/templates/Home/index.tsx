import BoxJutsus from '@/components/BoxJutsus';
import FilterBar from '@/components/FilterBar';
import JutsuCard from '@/components/JutsuCard';
import SearchFilter from '@/components/SearchFilter';
import { useState } from 'react';

import Base from '../Base';
import * as S from './styles';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

const Home = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  function handleOpenFilter() {
    setIsOpenFilter((prev) => !prev);
  }

  return (
    <Base>
      <S.Container>
        <FilterBar
          isOpenFilter={isOpenFilter}
          onOpenFilter={handleOpenFilter}
        />
        <S.Content>
          <SearchFilter onOpenFilter={handleOpenFilter} />
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
