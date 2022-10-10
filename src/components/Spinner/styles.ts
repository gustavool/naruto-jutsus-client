import styled from 'styled-components';

export const Wrapper = styled.div`
  svg {
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.black};
    stroke: ${({ theme }) => theme.black};
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
