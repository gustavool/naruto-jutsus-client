import { useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  label: string;
  labelFor: string;
  value?: string | ReadonlyArray<string> | number;
};

const Checkbox = ({ label, labelFor, value }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    console.log(`chamou`);
    setChecked((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <S.Label htmlFor={labelFor}>{label}</S.Label>
    </S.Wrapper>
  );
};

export default Checkbox;
