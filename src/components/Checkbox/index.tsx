import * as S from './styles';

export type CheckboxProps = {
  label: string;
  labelFor: string;
  value?: string | ReadonlyArray<string> | number;
};

const Checkbox = ({ label, labelFor, value }: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" value={value} />
    <S.Label htmlFor={labelFor}>{label}</S.Label>
  </S.Wrapper>
);

export default Checkbox;
