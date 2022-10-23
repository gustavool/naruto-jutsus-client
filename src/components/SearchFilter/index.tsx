import { useAppDispatch, useAppSelector } from '@/hooks/Redux';
import { useDebounce } from '@/hooks/useDebounce';
import FilterIcon from '@/public/assets/icons/filter.svg';
import { addFilters } from '@/store/Filters.store';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import * as S from './styles';

export type SearchFilterProps = {
  onOpenFilter: () => void;
};

const DELAY_DEBOUNCE = 500; //500ms

const SearchFilter = ({ onOpenFilter }: SearchFilterProps) => {
  const [typedJutsuName, setTypedJutsuName] = useState(``);
  const dispatch = useAppDispatch();
  const filtersData = useAppSelector((state) => state.filters);
  const debouncedJutsuName = useDebounce(typedJutsuName, DELAY_DEBOUNCE);

  function handleTypeJutsuName(e: React.ChangeEvent<HTMLInputElement>) {
    const nameTyped = e.target.value;
    setTypedJutsuName(nameTyped);
  }

  useEffect(() => {
    dispatch(
      addFilters({
        ...filtersData,
        name: debouncedJutsuName,
      }),
    );
  }, [debouncedJutsuName]);

  return (
    <S.Wrapper>
      <SearchBar onType={handleTypeJutsuName} />
      <S.FilterWrapper onClick={onOpenFilter}>
        <FilterIcon />
      </S.FilterWrapper>
    </S.Wrapper>
  );
};

export default SearchFilter;
