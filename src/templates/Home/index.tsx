import { Fragment, useCallback, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import BoxJutsus from '@/components/BoxJutsus';
import FilterBar from '@/components/FilterBar';
import JutsuCard from '@/components/JutsuCard';
import SearchFilter from '@/components/SearchFilter';
import ArrowIcon from '@/public/assets/icons/arrow.svg';

import Base from '../Base';
import * as S from './styles';
import api from '@/services/api';
import BackToTop from '@/components/BackToTop';

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

const LIMIT = 20;

const Home = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  async function getAllJutsuWithPage(page: number) {
    const data = await api
      .get<AllJutsusProps>(`/jutsus?limit=${LIMIT}&page=${page}`)
      .then((response) => response.data);

    return data;
  }

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [`jutsus`],
      ({ pageParam = 0 }) => getAllJutsuWithPage(pageParam),
      {
        getNextPageParam: (lastPage) => {
          const lastPageAvailable = Math.floor(lastPage.total / LIMIT);
          if (lastPage.page < lastPageAvailable) {
            return lastPage.page + 1;
          }
          return undefined;
        },
      },
    );

  const handleOpenFilter = useCallback(() => {
    setIsOpenFilter((prev) => !prev);
  }, []);

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
          <S.ShowMoreButton role="button" onClick={() => fetchNextPage()}>
            <p>More jutsus</p>
            <ArrowIcon />
          </S.ShowMoreButton>
        </S.Content>
        <BackToTop />
      </S.Container>
    </Base>
  );
};

export default Home;
