import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <span>All jutsus data is from</span>
    <a
      href="https://naruto.fandom.com/wiki/Category:Jutsu"
      target="_blank"
      rel="noreferrer"
    >
      Naruto Fandom
    </a>
  </S.Wrapper>
);

export default Header;
