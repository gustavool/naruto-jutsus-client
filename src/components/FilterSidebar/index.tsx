import {
  filterClassifications,
  filterDebuts,
  filterTypes,
} from '@/utils/content/filtersData';
import Checkbox from '../Checkbox';
import * as S from './styles';

const FilterSidebar = () => {
  return (
    <S.Wrapper>
      <S.Content>
        {!!filterDebuts && (
          <S.BoxFilter>
            <S.Title>{filterDebuts.title}</S.Title>
            <S.Filter>
              {filterDebuts.fields.map((debut) => {
                return (
                  <Checkbox
                    key={debut.value}
                    label={debut.label}
                    labelFor={debut.label}
                  />
                );
              })}
            </S.Filter>
          </S.BoxFilter>
        )}

        {!!filterClassifications && (
          <S.BoxFilter>
            <S.Title>{filterClassifications.title}</S.Title>
            <S.Filter>
              {filterClassifications.fields.map((debut) => {
                return (
                  <Checkbox
                    key={debut.value}
                    label={debut.label}
                    labelFor={debut.label}
                  />
                );
              })}
            </S.Filter>
          </S.BoxFilter>
        )}

        {!!filterTypes && (
          <S.BoxFilter>
            <S.Title>{filterTypes.title}</S.Title>
            <S.Filter>
              {filterTypes.fields.map((debut) => {
                return (
                  <Checkbox
                    key={debut.value}
                    label={debut.label}
                    labelFor={debut.label}
                  />
                );
              })}
            </S.Filter>
          </S.BoxFilter>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default FilterSidebar;
