import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  & + & {
    margin-top: 4px;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  min-width: 18px;
  min-height: 18px;
  border: 2px solid ${({ theme }) => theme.background.primary};
  border-radius: 4px;
  position: relative;
  outline: none;
  cursor: pointer;

  &:before {
    content: '';
    width: 5px;
    height: 8px;
    border: 2px solid ${({ theme }) => theme.white};
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    position: absolute;
    top: 0px;
    opacity: 0;
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.black};
  }
  &:checked {
    background: ${({ theme }) => theme.background.primary};

    &:before {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  padding-left: 4px;
  font-size: 14px;
  cursor: pointer;
`;
