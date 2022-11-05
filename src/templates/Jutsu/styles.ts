import { breakpoints } from '@/styles/breakpoints';
import styled from 'styled-components';
import * as AccordionStyles from '../../components/AccordionData/styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 28px;

  button {
    align-self: flex-start;
  }
`;

export const BackButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray700};
  font-weight: bold;
  text-transform: uppercase;

  svg {
    transform: rotate(90deg);
    fill: ${({ theme }) => theme.colors.gray700};
    stroke: 2px ${({ theme }) => theme.colors.gray700};
    stroke-width: 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${AccordionStyles.Wrapper} {
    margin-top: 8px;
  }
`;

export const TitleH1 = styled.h1`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.colors.yellow700};
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
`;

export const Data = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.yellow700};
  border-radius: 8px;
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 24px;
    padding: 8px 0;
    background-color: ${({ theme }) => theme.colors.yellow700};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-align: center;
  }
`;

export const DataContent = styled.div`
  padding: 16px 8px;
`;

export const BoxImage = styled.div`
  width: 100%;
  min-width: 320px;
  img {
    border-radius: 4px;
  }
`;

export const SideData = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;

  ${BoxImage}, ${Data} {
    flex: 50%;
  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;
