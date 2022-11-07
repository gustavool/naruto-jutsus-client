import { breakpoints } from '@/styles/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  max-width: ${breakpoints.lg};
  height: 24px;
  background-color: ${({ theme }) => theme.colors.gray700};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.yellow700};
    font-size: 12px;
  }

  a {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.yellow700};
    border-bottom: 1px solid ${({ theme }) => theme.colors.yellow700};
    text-decoration: none;
    margin-left: 4px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.yellow300};
    border-bottom: 1px solid ${({ theme }) => theme.colors.yellow300};
  }
`;
