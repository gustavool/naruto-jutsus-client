import { useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  label: string;
  labelFor: string;
  value?: string;
  isChecked: boolean;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({
  label,
  labelFor,
  value,
  onCheck,
  isChecked = false,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => !prev);
    onCheck(e);
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
