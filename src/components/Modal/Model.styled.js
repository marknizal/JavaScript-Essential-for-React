import styled, { keyframes } from "styled-components";

// Animation keyframes
export const slideIn = keyframes`
  from {
    bottom: -300px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
export const ModalBackground = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  animation-name: ${fadeIn};
  animation-duration: 0.4s;
`;

export const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  animation-name: ${slideIn};
  animation-duration: 0.4s;
`;

export const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #222222;
  color: white;
`;

export const ModalBody = styled.div`
  padding: 2px 16px;
`;

export const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: #222222;
  color: white;
`;

export const CloseButton = styled.span`
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const HeaderText = styled.h2`
  color: white;
`;
