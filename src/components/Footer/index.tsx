import CoffeeIcon from '@/public/assets/icons/coffee.svg';
import GithubIcon from '@/public/assets/icons/github.svg';
import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <span>
      Developed with <CoffeeIcon /> by
      <S.LinkRepo
        href="https://github.com/gustavool"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon />
        Gustavo Oliveira
      </S.LinkRepo>
    </span>
  </S.Wrapper>
);

export default Footer;
