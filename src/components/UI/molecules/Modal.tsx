import React from "react";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal as ChakraModal,
} from "@chakra-ui/react";
import { When } from "react-if";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  description?: string;
  onConfirm: () => void;
  isLoading?: boolean;
}

const Modal: React.FC<IModal> = ({
  isOpen,
  onClose,
  description,
  onConfirm,
  isLoading,
}) => (
  <>
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Are you sure you want to do that?</ModalHeader>
        <ModalCloseButton />
        <When condition={description}>
          <ModalBody>{description}</ModalBody>
        </When>

        <ModalFooter>
          <Button
            isLoading={isLoading}
            colorScheme="blue"
            mr={3}
            onClick={onConfirm}
          >
            Delete
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  </>
);

export default Modal;
