import Checkbox from '../Checkbox';
import * as S from './styles';

type FilterOptionProps = {
  title: string;
  fields: {
    label: string;
    value: string;
  }[];
};

const FilterOption = ({ title, fields }: FilterOptionProps) => {
  if (fields.length === 0) {
    return null;
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Filter>
        {fields.map((field) => {
          return (
            <Checkbox
              key={field.value}
              label={field.label}
              labelFor={field.label}
            />
          );
        })}
      </S.Filter>
    </S.Wrapper>
  );
};

export default FilterOption;
