import {
  filterClassifications,
  filterDebuts,
  filterTypes,
} from '@/utils/content/filtersData';
import CloseIcon from '@/public/assets/icons/close.svg';
import FilterOption from '../FilterOption';
import * as S from './styles';

export type FilterBarProps = {
  isOpenFilter: boolean;
  onOpenFilter: () => void;
};

const FilterBar = ({ isOpenFilter, onOpenFilter }: FilterBarProps) => {
  return (
    <S.Wrapper isOpen={isOpenFilter}>
      <S.Content>
        {!!isOpenFilter && (
          <CloseIcon
            onClick={() => onOpenFilter()}
            aria-label="close filter options"
          />
        )}
        <FilterOption title={filterDebuts.title} fields={filterDebuts.fields} />
        <FilterOption
          title={filterClassifications.title}
          fields={filterClassifications.fields}
        />
        <FilterOption title={filterTypes.title} fields={filterTypes.fields} />
        {!!isOpenFilter && <S.Button>Filter</S.Button>}
      </S.Content>
    </S.Wrapper>
  );
};

export default FilterBar;
