import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }
`;
