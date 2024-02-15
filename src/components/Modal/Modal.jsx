import React, { useState } from "react";
import Button from "../Button/Button";
import {
  ModalBackground,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  HeaderText,
} from "./Model.styled";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={openModal}>APPLY NOW</Button>
      <ModalBackground isOpen={isOpen} onClick={closeModal}>
        <ModalContent>
          <ModalHeader>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <HeaderText>SAMPLE MODAL</HeaderText>
          </ModalHeader>
          <ModalBody>
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </ModalBody>
          <ModalFooter>
            <h3>Modal Footer</h3>
          </ModalFooter>
        </ModalContent>
      </ModalBackground>
    </div>
  );
};

export default Modal;
