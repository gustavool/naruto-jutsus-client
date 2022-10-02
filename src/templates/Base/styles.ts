import styled from 'styled-components';
import { breakpoints } from '@/styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  width: 100%;
  height: 100vh;
  padding: 0 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: ${breakpoints.lg};
  background-color: ${({ theme }) => theme.background.secondary};
`;
