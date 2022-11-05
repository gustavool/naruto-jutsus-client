import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.yellow700};
  border-radius: 8px;
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 24px;
    padding: 8px 0;
    background-color: ${({ theme }) => theme.colors.yellow700};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-align: center;
  }
`;

export const Data = styled.div`
  padding: 16px 8px;

  div {
    display: flex;
    strong {
      margin-right: 8px;
    }

    & + div {
      margin-top: 8px;
    }
  }
`;
