import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;
  background-color: #000000;
  padding: 30px 0;
  width: 100%;
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -1px 10px whitesmoke;
  margin-bottom: 30px;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  color: black;
  font-size: 20px;
`;

export const SearchInput = styled.input`
  width: inherit;
  height: inherit;
  padding: 8px;
  background-color: inherit;
  color: #ececec;
  outline: none;
  border: none;
  border-bottom: 1px solid #ececec;
  &::placeholder {
    font-size: 15px;
    color: grey;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: inherit;
  border-bottom: 1px solid #ececec;
  svg {
    fill: grey;
    transition: all 250ms ease-in-out;
  }
  &:hover,
  &:focus,
  &:active {
    svg {
      fill: #ececec;
    }
  }
`;
