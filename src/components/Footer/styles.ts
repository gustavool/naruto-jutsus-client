import { breakpoints } from '@/styles/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  max-width: ${breakpoints.lg};
  height: 56px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.yellow700};
    display: flex;
    align-items: center;

    > svg {
      stroke: ${({ theme }) => theme.colors.white};
      margin: 0 4px;
    }
  }
`;

export const LinkRepo = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  margin-left: 4px;

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  :hover {
    color: ${({ theme }) => theme.colors.yellow300};
    border-bottom: 2px solid ${({ theme }) => theme.colors.yellow300};

    svg {
      fill: ${({ theme }) => theme.colors.yellow300};
    }
  }
`;
