import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

export type JutsuImageProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

const JutsuImage = ({ images }: JutsuImageProps) => {
  const [showImage, setShowImage] = useState({
    src: images[0].src,
    alt: images[0].alt,
  });

  function handleSelectImage(e: React.MouseEvent<HTMLButtonElement>) {
    const imageSelected = e.currentTarget.innerText;
    const imageToShow = images.find((image) => image.alt === imageSelected);

    if (imageToShow) {
      setShowImage(imageToShow);
    }
  }

  return (
    <S.Wrapper>
      {images.length > 1 && (
        <S.HeaderImages>
          {images.map((image) => (
            <S.ButtonImage
              key={image.alt}
              onClick={handleSelectImage}
              isSelected={image.alt === showImage.alt}
            >
              {image.alt}
            </S.ButtonImage>
          ))}
        </S.HeaderImages>
      )}

      <Image
        key={showImage.alt}
        src={showImage.src}
        alt={showImage.alt}
        width="430px"
        height="313px"
        layout="responsive"
      />
    </S.Wrapper>
  );
};

export default JutsuImage;
