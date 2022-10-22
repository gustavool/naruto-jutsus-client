import { useRef } from 'react';
import {
  filterClassifications,
  filterDebuts,
  filterTypes,
} from '@/utils/content/filtersData';
import CloseIcon from '@/public/assets/icons/close.svg';
import FilterOption from '../FilterOption';
import { FilterCheckProps } from '@/templates/Home';
import * as S from './styles';

export type FilterBarProps = {
  isOpenFilter: boolean;
  onOpenFilter: () => void;
  onCheck: (filterChecked: FilterCheckProps) => void;
};

const FilterBar = ({ isOpenFilter, onOpenFilter, onCheck }: FilterBarProps) => {
  const filterRef = useRef(null);

  function closeFilter(e: any) {
    if (filterRef.current === e.target) {
      onOpenFilter();
    }
  }

  return (
    <S.Wrapper
      isOpen={isOpenFilter}
      ref={filterRef}
      onClick={isOpenFilter ? closeFilter : undefined}
    >
      <S.Content>
        {!!isOpenFilter && (
          <CloseIcon onClick={onOpenFilter} aria-label="close filter options" />
        )}
        <FilterOption
          title={filterDebuts.title}
          fields={filterDebuts.fields}
          onCheck={onCheck}
        />
        <FilterOption
          title={filterClassifications.title}
          fields={filterClassifications.fields}
          onCheck={onCheck}
        />
        <FilterOption
          title={filterTypes.title}
          fields={filterTypes.fields}
          onCheck={onCheck}
        />
        {!!isOpenFilter && <S.Button onClick={onOpenFilter}>Filter</S.Button>}
      </S.Content>
    </S.Wrapper>
  );
};

export default FilterBar;
