import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 15px;
  margin: 0px auto;
  padding: 0px;
`;
