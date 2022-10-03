import Checkbox from '../Checkbox';
import * as S from './styles';

const FilterSidebar = () => {
  const filterDebuts = {
    title: `Debuts`,
    fields: [
      { label: `Manga`, value: `manga` },
      { label: `Anime`, value: `anime` },
      { label: `Novel`, value: `novel` },
      { label: `Movie`, value: `movie` },
      { label: `Game`, value: `game` },
      { label: `Ova`, value: `ova` },
    ],
  };

  const filterClassifications = {
    title: `Classifications`,
    fields: [
      { label: `Senjutsu`, value: `Senjutsu` },
      { label: `General skill`, value: `General skill` },
      { label: `Space-Time Ninjutsu`, value: `Space-Time Ninjutsu` },
      { label: `Regeneration Techniques`, value: `Regeneration Techniques` },
      { label: `Hiden`, value: `Hiden` },
      {
        label: `Chakra Absorption Techniques`,
        value: `Chakra Absorption Techniques`,
      },
      { label: `Chakra Flow`, value: `Chakra Flow` },
      { label: `Shurikenjutsu`, value: `Shurikenjutsu` },
      { label: `Ninshu`, value: `Ninshu` },
      { label: `Kinjutsu`, value: `Kinjutsu` },
      { label: `Taijutsu`, value: `Taijutsu` },
      { label: `Reincarnation Ninjutsu`, value: `Reincarnation Ninjutsu` },
      { label: `Nintaijutsu`, value: `Nintaijutsu` },
      { label: `Kekkei Tota`, value: `Kekkei Tota` },
      { label: `Fuinjutsu`, value: `Fuinjutsu` },
      { label: `Fighting Style`, value: `Fighting Style` },
      { label: `Barrier Ninjutsu`, value: `Barrier Ninjutsu` },
      { label: `Cooperation Ninjutsu`, value: `Cooperation Ninjutsu` },
      { label: `Jujutsu`, value: `Jujutsu` },
      { label: `Genjutsu`, value: `Genjutsu` },
      { label: `Ninjutsu`, value: `Ninjutsu` },
      { label: `Medical Ninjutsu`, value: `Medical Ninjutsu` },
      { label: `Kenjutsu`, value: `Kenjutsu` },
      { label: `Fighting style`, value: `Fighting style` },
      { label: `Kyujutsu`, value: `Kyujutsu` },
      { label: `Dojutsu`, value: `Dojutsu` },
      { label: `Juinjutsu`, value: `Juinjutsu` },
      { label: `Collaboration Techniques`, value: `Collaboration Techniques` },
      { label: `Kekkei Mora`, value: `Kekkei Mora` },
      { label: `Bukijutsu`, value: `Bukijutsu` },
      { label: `Clone Techniques`, value: `Clone Techniques` },
      { label: `Space–Time Ninjutsu`, value: `Space–Time Ninjutsu` },
      { label: `Kekkei Genkai`, value: `Kekkei Genkai` },
      { label: `None`, value: `` },
    ],
  };

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
      </S.Content>
    </S.Wrapper>
  );
};

export default FilterSidebar;
