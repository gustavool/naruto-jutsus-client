import ArrowIcon from '@/public/assets/icons/arrow.svg';
import { useState } from 'react';
import * as S from './styles';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  if (typeof window !== `undefined`) {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function topFunction() {
    window.scrollTo({ top: 0, behavior: `smooth` });
  }

  return (
    <S.Wrapper onClick={topFunction} showButton={showButton}>
      <ArrowIcon />
    </S.Wrapper>
  );
};

export default BackToTop;
