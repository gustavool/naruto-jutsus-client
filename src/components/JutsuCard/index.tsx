import Image from 'next/image';
import EmptyImage from '@/public/assets/empty-image.jpeg';
import * as S from './styles';

export type JutsuCardProps = {
  img: {
    src: string;
    alt: string;
  }[];
  name: string;
};

const JutsuCard = ({ img, name }: JutsuCardProps) => {
  const imageJutsuSrc = !!img[0] ? img[0].src : EmptyImage.src;
  const imageJutsuAlt = !!img[0] ? img[0].alt : name;

  return (
    <S.Wrapper>
      <S.BoxImage>
        <Image
          src={imageJutsuSrc}
          alt={imageJutsuAlt}
          width="256"
          height="176"
        />
      </S.BoxImage>
      <S.Name>{name}</S.Name>
    </S.Wrapper>
  );
};

export default JutsuCard;
