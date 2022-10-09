import { useState } from 'react';
import { useQuery } from 'react-query';
import BoxJutsus from '@/components/BoxJutsus';
import FilterBar from '@/components/FilterBar';
import JutsuCard from '@/components/JutsuCard';
import SearchFilter from '@/components/SearchFilter';

import Base from '../Base';
import * as S from './styles';
import api from '@/services/api';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

export type AllJutsusProps = {
  total: number;
  page: number;
  pageSize: number;
  jutsus: [
    {
      names: {
        englishName: string;
      };

      _id: string;
      images: [
        {
          src: string;
          alt: string;
        },
      ];
    },
  ];
};

const Home = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const {
    data: allJutsus,
    isError,
    isLoading,
  } = useQuery([`jutsus`], () =>
    api
      .get<AllJutsusProps>(`/jutsus?limit=20&page=0`)
      .then((response) => response.data),
  );

  console.log(`data`, allJutsus);
  console.log(`isError`, isError);

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
            {!!allJutsus &&
              allJutsus.jutsus.map((jutsu) => (
                <JutsuCard
                  key={jutsu._id}
                  img={jutsu.images}
                  name={jutsu.names.englishName}
                />
              ))}
          </BoxJutsus>
        </S.Content>
      </S.Container>
    </Base>
  );
};

export default Home;
