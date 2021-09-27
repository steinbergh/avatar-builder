import React from "react";
import ReactModal from "react-modal";
import "./style.css";

type PrintAgainModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

ReactModal.setAppElement("#root");

export const PrintAgainModal = ({ isOpen, onClose }: PrintAgainModalProps) => {
  React.useEffect(() => {
    function handleAfterPrint() {
      onClose();
    }
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 1 * 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <ReactModal
        onRequestClose={onClose}
        shouldCloseOnOverlayClick
        isOpen={isOpen}
        overlayClassName="overlay"
        className="pa-content"
        preventScroll
      >
        <h2>{`Now one more for the wall!`}</h2>
      </ReactModal>
    </>
  );
};
