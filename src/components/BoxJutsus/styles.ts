import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 2fr));
  grid-gap: 8px;
  margin: 8px auto;
  justify-items: center;
`;
