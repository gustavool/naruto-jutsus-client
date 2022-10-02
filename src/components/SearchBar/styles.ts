import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;

  svg {
    width: 28px;
    height: 28px;
    margin: 0 8px;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};

  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 8px;
    border-radius: 4px;
  }
`;
