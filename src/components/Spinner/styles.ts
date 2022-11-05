import styled from 'styled-components';

export const Wrapper = styled.div`
  svg {
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.colors.gray700};
    stroke: ${({ theme }) => theme.colors.gray700};
    stroke-width: 24px;
    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
