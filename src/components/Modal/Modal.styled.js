import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(38, 36, 36, 0.7);
`;

export const ModalBox = styled.div`
  max-width: calc(100vw - 30px);
  max-height: calc(100vh - 15px);
`;
