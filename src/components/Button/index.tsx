import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);

export default Button;
