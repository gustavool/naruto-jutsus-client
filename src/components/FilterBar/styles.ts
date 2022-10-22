import { breakpoints } from '@/styles/breakpoints';
import styled from 'styled-components';
import * as FilterOptionStyles from '@/components/FilterOption/styles';

type WrapperFilterBarProps = {
  isOpen: boolean;
};

export const Wrapper = styled.div<WrapperFilterBarProps>`
  width: 100%;
  max-width: 146px;
  margin-right: 8px;

  @media (max-width: ${breakpoints.md}) {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    position: fixed;
    width: 100vh;
    max-width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: ${({ isOpen }) => (isOpen ? `flex` : `none`)};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
`;

export const Content = styled.div`
  svg {
    display: none;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    max-width: 350px;
    position: relative;
    background: #fff;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    flex-wrap: wrap;
    display: flex;
    margin: 8px;

    ${FilterOptionStyles.Wrapper} {
      max-width: 150px;
      padding: 8px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
      margin-top: 0;

      &::after {
        display: none;
      }
    }

    ${FilterOptionStyles.Filter} {
      max-height: 250px;
    }

    button {
      margin-top: 8px;
    }

    svg {
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 8px;
      top: 8px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    ${FilterOptionStyles.Wrapper} {
      max-width: none;
    }

    ${FilterOptionStyles.Filter} {
      max-height: 150px;
    }
  }
`;

export const Button = styled.button`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.yellow700};
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid transparent;
    padding: 4px;

    :hover {
      background-color: ${({ theme }) => theme.colors.yellow300};
      border: 2px solid ${({ theme }) => theme.colors.yellow700};
    }
  }
`;
