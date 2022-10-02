import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 256px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoxImage = styled.div`
  width: 100%;
  img {
    border-radius: 4px 4px 0 0;
    width: 100%;
  }
`;

export const Name = styled.span`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 0 0 4px 4px;
  font-size: 14px;
  font-weight: bold;
  margin-top: -4px;
`;
