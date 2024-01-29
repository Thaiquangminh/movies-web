import React from "react";
import Modal from "react-modal";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: JSX.Element;
};

const ModalCustom = (props: ModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 999999999,
    },
    overlay: {
      zIndex: 1000,
    },
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {props.children}
      </Modal>
    </div>
  );
};

export default ModalCustom;
