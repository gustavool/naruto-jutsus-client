import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.yellow700};
  border-radius: 8px;
  width: 100%;
`;

export const Title = styled.div<{ showData: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.yellow700};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;

  svg {
    transition: 0.2s ease-in-out;
    transform: ${({ showData }) => (showData ? `` : `rotate(-180deg)`)};
    width: 24px;
    height: 24px;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
`;

export const Data = styled.div<{ showData: boolean }>`
  padding: 16px 8px;
  display: ${({ showData }) => (showData ? `block` : `none`)};

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
