import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 320px;
  position: relative;

  img {
    border-radius: 4px;
  }
`;

export const HeaderImages = styled.div`
  width: 100%;
  height: 24px;
  backdrop-filter: blur(10px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonImage = styled.button<{ isSelected: boolean }>`
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid transparent;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.yellow300 : theme.colors.white};
  background-color: transparent;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.yellow300};
    color: ${({ theme }) => theme.colors.yellow300};
  }
`;
