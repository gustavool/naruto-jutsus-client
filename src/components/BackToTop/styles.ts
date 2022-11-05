import styled from 'styled-components';

type WrapperBackToTopProps = {
  showButton: boolean;
};

export const Wrapper = styled.button<WrapperBackToTopProps>`
  display: ${({ showButton }) => (showButton ? `block` : `none`)};
  position: fixed;
  bottom: 72px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray700};

  :hover {
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  svg {
    transform: rotate(180deg);
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.yellow700};
  }
`;
