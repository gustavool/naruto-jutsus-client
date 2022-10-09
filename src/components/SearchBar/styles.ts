import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};

  svg {
    width: 28px;
    height: 28px;
    margin: 0 8px 0 4px;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 8px;
    border-radius: 4px;
  }
`;
