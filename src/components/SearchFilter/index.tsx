import FilterIcon from '@/public/assets/icons/filter.svg';
import * as S from './styles';
import { useState } from 'react';
import SearchBar from '../SearchBar';
const SearchFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <SearchBar />
      <S.FilterWrapper onClick={() => setIsOpen(true)}>
        <FilterIcon />
      </S.FilterWrapper>
    </S.Wrapper>
  );
};

export default SearchFilter;
