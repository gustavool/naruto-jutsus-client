import { useCallback, useRef } from 'react';
import {
  filterClassifications,
  filterDebuts,
  filterTypes,
} from '@/utils/content/filtersData';
import CloseIcon from '@/public/assets/icons/close.svg';
import FilterOption from '../FilterOption';
import { addFilters, FilterOptionType } from '@/store/Filters.store';
import { useAppDispatch, useAppSelector } from '@/hooks/Redux';
import * as S from './styles';

export type FilterBarProps = {
  isOpenFilter: boolean;
  onOpenFilter: () => void;
};

const FilterBar = ({ isOpenFilter, onOpenFilter }: FilterBarProps) => {
  const filterRef = useRef(null);

  const dispatch = useAppDispatch();
  const filtersData = useAppSelector((state) => state.filters);

  function closeFilter(e: any) {
    if (filterRef.current === e.target) {
      onOpenFilter();
    }
  }
  const handleCheckFilters = useCallback(
    (filterChecked: FilterOptionType) => {
      const prevFilters = filtersData.options.filter(
        (filterOption) => filterOption.name !== filterChecked.name,
      );

      const alreadySelected = filtersData.options.some(
        (currentFilter) => currentFilter.name === filterChecked.name,
      );

      if (alreadySelected) {
        dispatch(
          addFilters({
            ...filtersData,
            options: [...prevFilters],
          }),
        );
        return;
      }
      dispatch(
        addFilters({
          ...filtersData,
          options: [...filtersData.options, filterChecked],
        }),
      );
    },
    [filtersData.options],
  );

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
          onCheck={handleCheckFilters}
        />
        <FilterOption
          title={filterClassifications.title}
          fields={filterClassifications.fields}
          onCheck={handleCheckFilters}
        />
        <FilterOption
          title={filterTypes.title}
          fields={filterTypes.fields}
          onCheck={handleCheckFilters}
        />
        {!!isOpenFilter && <S.Button onClick={onOpenFilter}>Filter</S.Button>}
      </S.Content>
    </S.Wrapper>
  );
};

export default FilterBar;
