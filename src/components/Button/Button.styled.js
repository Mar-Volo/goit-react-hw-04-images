import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border: 1px solid grey;
  font-size: 15px;
  font-weight: 500;
  color: grey;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ececec;
    font-weight: 600;
    border: 1px solid #ececec;
    box-shadow: 0px 0px 1px whitesmoke;
  }
`;
