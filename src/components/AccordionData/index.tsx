import ArrowIcon from '@/public/assets/icons/arrow.svg';
import { useState } from 'react';
import * as S from './styles';

type DataJutsu = {
  name: string;
  description?: string;
};

export type AccordionDataProps = {
  title: string;
  data: DataJutsu[];
};

const AccordionData = ({ title, data }: AccordionDataProps) => {
  const [showData, setShowData] = useState(true);

  function handleClick() {
    setShowData((prev) => !prev);
  }

  return (
    <S.Wrapper>
      <S.Title onClick={handleClick} showData={showData}>
        <h2>{title}</h2>
        <ArrowIcon />
      </S.Title>
      <S.Data showData={showData}>
        {data.length > 0 &&
          data.map((data) => {
            if (!!data.description) {
              return (
                <div key={data.name}>
                  <strong>{data.name}</strong>
                  <p>{data.description}</p>
                </div>
              );
            }
          })}
      </S.Data>
    </S.Wrapper>
  );
};

export default AccordionData;
