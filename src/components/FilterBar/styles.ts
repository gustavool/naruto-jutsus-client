import { breakpoints } from '@/styles/breakpoints';
import styled from 'styled-components';
import * as FilterOptionStyles from '@/components/FilterOption/styles';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 146px;
  margin-right: 8px;

  @media (max-width: ${breakpoints.md}) {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    position: fixed;
    width: 100vh;
    max-width: 100%;
    min-height: 100vh;
    /* min-height: 900px; */
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
`;

export const Content = styled.div`
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    max-width: 350px;
    background: #fff;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    flex-wrap: wrap;
    display: flex;

    ${FilterOptionStyles.Wrapper} {
      max-width: 150px;
      padding: 8px;
      border-bottom: 2px solid ${({ theme }) => theme.background.primary};
      margin-top: 0;

      &::after {
        display: none;
      }
    }

    ${FilterOptionStyles.Filter} {
      max-height: 250px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px;
`;
