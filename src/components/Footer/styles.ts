import { breakpoints } from '@/styles/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  max-width: ${breakpoints.lg};
  height: 56px;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.background.primary};
    display: flex;
    align-items: center;

    > svg {
      stroke: ${({ theme }) => theme.white};
      margin: 0 4px;
    }
  }
`;

export const LinkRepo = styled.a`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  margin-left: 4px;

  svg {
    fill: ${({ theme }) => theme.white};
  }

  :hover {
    color: ${({ theme }) => theme.background.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.background.secondary};

    svg {
      fill: ${({ theme }) => theme.background.secondary};
    }
  }
`;
