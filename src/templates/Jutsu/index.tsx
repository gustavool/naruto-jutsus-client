import BackToTop from '@/components/BackToTop';
import { useRouter } from 'next/router';
import Base from '../Base';
import * as S from './styles';

const Jutsu = () => {
  const { push } = useRouter();

  return (
    <Base>
      <S.Container>
        <S.Content>
          <button onClick={() => push(`/`)}>Voltar</button>
          <h1>Teste jutsus</h1>
        </S.Content>
        <BackToTop />
      </S.Container>
    </Base>
  );
};

export default Jutsu;
