import SearchIcon from '@/public/assets/icons/search.svg';
import * as S from './styles';

export type SearchBarProps = {
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ onType }: SearchBarProps) => {
  return (
    <S.Wrapper>
      <input type="text" placeholder="Search jutsu ..." onChange={onType} />
      <SearchIcon />
    </S.Wrapper>
  );
};

export default SearchBar;
