import { FilterCheckProps } from '@/templates/Home';
import Checkbox from '../Checkbox';
import * as S from './styles';

type FilterOptionProps = {
  title: string;
  fields: {
    label: string;
    value: string;
  }[];
  onCheck: (filterChecked: FilterCheckProps) => void;
};

const FilterOption = ({ title, fields, onCheck }: FilterOptionProps) => {
  if (fields.length === 0) {
    return null;
  }

  function handleCheckFilters(e: React.ChangeEvent<HTMLInputElement>) {
    onCheck({
      type: title,
      option: e.target.value,
    });
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
              value={field.value}
              onCheck={handleCheckFilters}
            />
          );
        })}
      </S.Filter>
    </S.Wrapper>
  );
};

export default FilterOption;
