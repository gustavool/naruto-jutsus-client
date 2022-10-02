import Header from '@/components/Header';
import Logo from '@/public/assets/logo.png';
import Image from 'next/image';
import * as S from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <S.TopContent>
      <Header />
      <Image src={Logo} alt="Naruto logo" />
    </S.TopContent>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Base;
