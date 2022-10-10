import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ShowMoreButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  margin: 16px auto;

  p {
    font-weight: bold;
  }

  svg {
    margin-top: -8px;
    width: 32px;
    height: 32px;

    animation: downarrow 0.6s infinite alternate ease-in-out;
  }

  @keyframes downarrow {
    0% {
      transform: translateY(0);
      opacity: 0.6;
    }
    100% {
      transform: translateY(0.4em);
      opacity: 1;
    }
  }
`;
