import { useAppSelector } from '@/hooks/Redux';
import { FilterOptionType } from '@/store/Filters.store';
import Checkbox from '../Checkbox';
import * as S from './styles';

type FilterOptionProps = {
  title: string;
  fields: {
    label: string;
    value: string;
  }[];
  onCheck: (filterChecked: FilterOptionType) => void;
};

const FilterOption = ({ title, fields, onCheck }: FilterOptionProps) => {
  if (fields.length === 0) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filtersData = useAppSelector((state) => state.filters);
  const filtersChecked = filtersData.options.map((filter) => filter.name);

  function handleCheckFilters(e: React.ChangeEvent<HTMLInputElement>) {
    onCheck({
      type: title,
      name: e.target.value,
    });
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Filter>
        {fields.map((field) => {
          const isChecked = filtersChecked.includes(field.value);

          return (
            <Checkbox
              key={field.value}
              label={field.label}
              labelFor={field.label}
              value={field.value}
              onCheck={handleCheckFilters}
              isChecked={isChecked}
            />
          );
        })}
      </S.Filter>
    </S.Wrapper>
  );
};

export default FilterOption;
