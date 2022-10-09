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

export type JutsuProps = {
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
};

export type AllJutsusProps = {
  total: number;
  page: number;
  pageSize: number;
  jutsus: JutsuProps[];
};

const Home = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [page, setPage] = useState(0);
  const [jutsuList, setJutsuList] = useState<JutsuProps[]>([]);

  async function getAllJutsuWithPage(pageNumber: number) {
    const data = await api
      .get<AllJutsusProps>(`/jutsus?limit=20&page=${pageNumber}`)
      .then((response) => response.data);

    setJutsuList((prev) => [...prev, ...data.jutsus]);
    return data;
  }

  const {
    data: allJutsus,
    isError,
    isLoading,
  } = useQuery([`jutsus`, page], () => getAllJutsuWithPage(page));

  console.log(`jutsuList`, jutsuList);

  function handleOpenFilter() {
    setIsOpenFilter((prev) => !prev);
  }

  function handleLoadMoreJutsus() {
    setPage((prev) => prev + 1);
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
            {!!jutsuList &&
              jutsuList.map((jutsu) => (
                <JutsuCard
                  key={jutsu._id}
                  img={jutsu.images}
                  name={jutsu.names.englishName}
                />
              ))}
          </BoxJutsus>
          <button onClick={handleLoadMoreJutsus}>More jutsus</button>
        </S.Content>
      </S.Container>
    </Base>
  );
};

export default Home;
