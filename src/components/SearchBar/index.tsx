import SearchIcon from '@/public/assets/icons/search.svg';
import * as S from './styles';

const SearchBar = () => (
  <S.Wrapper>
    <S.Bar>
      <input type="text" placeholder="Search jutsu ..." />
    </S.Bar>
    <SearchIcon />
  </S.Wrapper>
);

export default SearchBar;
