import FilterIcon from '@/public/assets/icons/filter.svg';
import SearchBar from '../SearchBar';
import * as S from './styles';

export type SearchFilterProps = {
  onOpenFilter: () => void;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchFilter = ({ onOpenFilter, onType }: SearchFilterProps) => {
  return (
    <S.Wrapper>
      <SearchBar onType={onType} />
      <S.FilterWrapper onClick={onOpenFilter}>
        <FilterIcon />
      </S.FilterWrapper>
    </S.Wrapper>
  );
};

export default SearchFilter;
