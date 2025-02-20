import  { createContext, useContext  } from "react";

// Define the context type with both state and updater function
type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

// Create the context with default values
export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});




// Custom hook to use the modal context
export const useModal = () => useContext(ModalContext);

