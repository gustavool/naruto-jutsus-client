import {
  filterClassifications,
  filterDebuts,
  filterTypes,
} from '@/utils/content/filtersData';
import CloseIcon from '@/public/assets/icons/close.svg';
import FilterOption from '../FilterOption';
import * as S from './styles';

const FilterBar = () => {
  return (
    <S.Wrapper>
      <S.Content>
        {/* <CloseIcon /> */}
        <FilterOption title={filterDebuts.title} fields={filterDebuts.fields} />
        <FilterOption
          title={filterClassifications.title}
          fields={filterClassifications.fields}
        />
        <FilterOption title={filterTypes.title} fields={filterTypes.fields} />
        {/* <S.Button>Filter</S.Button> */}
      </S.Content>
    </S.Wrapper>
  );
};

export default FilterBar;
