import FilterIcon from '@/public/assets/icons/filter.svg';
import SearchBar from '../SearchBar';
import * as S from './styles';

export type SearchFilterProps = {
  onOpenFilter: () => void;
};

const SearchFilter = ({ onOpenFilter }: SearchFilterProps) => {
  return (
    <S.Wrapper>
      <SearchBar />
      <S.FilterWrapper onClick={onOpenFilter}>
        <FilterIcon />
      </S.FilterWrapper>
    </S.Wrapper>
  );
};

export default SearchFilter;
