import Image from 'next/image';
import * as S from './styles';

const JutsuCard = () => (
  <S.Wrapper>
    <S.BoxImage>
      <Image
        src="https://static.wikia.nocookie.net/naruto/images/2/2b/Susanoo.png/revision/latest/scale-to-width-down/350?cb=20150207103348"
        alt="jutsu name"
        width="256"
        height="176"
      />
    </S.BoxImage>
    <S.Name>Susanoo</S.Name>
  </S.Wrapper>
);

export default JutsuCard;
