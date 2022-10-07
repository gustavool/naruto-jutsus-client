import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 146px;
  margin-right: 8px;
`;

export const Content = styled.div``;

export const BoxFilter = styled.div`
  & + & {
    margin-top: 16px;
  }
  position: relative;

  &::after {
    position: absolute;
    content: '';
    left: 25%;
    bottom: -4px;
    width: 64px;
    border-bottom: 1px solid ${({ theme }) => theme.background.primary};
  }
  /* padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.background.primary}; */
`;

export const Filter = styled.div`
  height: auto;
  max-height: 280px;
  overflow: auto;

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background.primary};
    border-radius: 2px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
`;

export const Title = styled.h2`
  position: relative;
  margin-bottom: 8px;

  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -1px;
    width: 32px;
    border-bottom: 2px solid ${({ theme }) => theme.background.primary};
  }
`;
