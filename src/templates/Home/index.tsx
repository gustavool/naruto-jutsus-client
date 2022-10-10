import { Fragment, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
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
  const [page, setPage] = useState(1);

  async function getAllJutsuWithPage(page: number) {
    console.log(`page`, page);
    const data = await api
      .get<AllJutsusProps>(`/jutsus?limit=20&page=${page}`)
      .then((response) => response.data);

    return data;
  }

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [`jutsus`],
      ({ pageParam = 0 }) => getAllJutsuWithPage(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.page + 1,
      },
    );

  console.log(`jutsuList`, data);

  function handleOpenFilter() {
    setIsOpenFilter((prev) => !prev);
  }

  // function handleLoadMoreJutsus() {
  //   setPage((prev) => prev + 1);
  // }

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
            {!!data &&
              data.pages.map((page, index) => {
                return (
                  <Fragment key={index}>
                    {page.jutsus.map((jutsu) => (
                      <JutsuCard
                        key={jutsu._id}
                        img={jutsu.images}
                        name={jutsu.names.englishName}
                      />
                    ))}
                  </Fragment>
                );
              })}
          </BoxJutsus>
          <button onClick={() => fetchNextPage()}>More jutsus</button>
        </S.Content>
      </S.Container>
    </Base>
  );
};

export default Home;
