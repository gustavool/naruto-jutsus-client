import SearchIcon from '@/public/assets/icons/search.svg';
import * as S from './styles';

const SearchBar = () => {
  return (
    <S.Wrapper>
      <input type="text" placeholder="Search jutsu ..." />
      <SearchIcon />
    </S.Wrapper>
  );
};

export default SearchBar;
