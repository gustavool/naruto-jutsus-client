import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px auto;
`;

export const BoxImage = styled.div`
  width: 100%;
  height: auto;
  img {
    border-radius: 4px 4px 0 0;
    width: 100%;
  }
`;

export const Name = styled.span`
  width: 100%;
  max-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 0 0 4px 4px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  margin-top: -4px;
`;
