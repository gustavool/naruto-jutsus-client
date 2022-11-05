import Image from 'next/image';
import EmptyJutsuList from '@/public/assets/empty-list.png';
import * as S from './styles';

const EmptyList = () => (
  <S.Wrapper>
    <Image src={EmptyJutsuList} alt="Empty jutsu list" />
    <p>Jutsu(s) not found!</p>
  </S.Wrapper>
);

export default EmptyList;
