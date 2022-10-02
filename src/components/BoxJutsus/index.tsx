import * as S from './styles';

export type BoxJutsusProps = {
  children: React.ReactNode;
};

const BoxJutsus = ({ children }: BoxJutsusProps) => (
  <S.Wrapper>{children}</S.Wrapper>
);

export default BoxJutsus;
