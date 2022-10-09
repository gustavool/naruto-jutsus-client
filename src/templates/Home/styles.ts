import styled from 'styled-components';
import * as FilterBar from '@/components/FilterBar/styles';
import { breakpoints } from '@/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  width: 100%;

  /* ${FilterBar.Wrapper} {
    @media (max-width: ${breakpoints.md}) {
      display: none;
    }
  } */
`;

export const Content = styled.div`
  width: 100%;
`;
