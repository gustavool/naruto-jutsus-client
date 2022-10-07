import SearchIcon from '@/public/assets/icons/search.svg';
import FilterIcon from '@/public/assets/icons/filter.svg';
import * as S from './styles';

const SearchBar = () => (
  <S.Wrapper>
    <S.Bar>
      <input type="text" placeholder="Search jutsu ..." />
      <SearchIcon />
    </S.Bar>
    <S.BoxFilter>
      <FilterIcon />
    </S.BoxFilter>
  </S.Wrapper>
);

export default SearchBar;
