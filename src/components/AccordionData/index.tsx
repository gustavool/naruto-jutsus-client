import * as S from './styles';

type DataJutsu = {
  name: string;
  description?: string;
};

export type AccordionDataProps = {
  title: string;
  data: DataJutsu[];
};

const AccordionData = ({ title, data }: AccordionDataProps) => (
  <S.Wrapper>
    <h2>{title}</h2>
    <S.Data>
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

export default AccordionData;
