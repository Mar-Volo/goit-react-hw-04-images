import styled from 'styled-components';

export const Item = styled.li`
  border: 1px solid #ececec;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 1px 1px 5px whitesmoke;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  filter: saturate(0);
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    filter: saturate(1.5);
    cursor: zoom-in;
  }
`;
