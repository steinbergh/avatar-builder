import { LeadForm } from "LeadForm";
import React from "react";
import ReactModal from "react-modal";
import "./style.css";

type LeadModalProps = {
  isOpen: boolean;
  leadName: string;
  fileName: string;
  onClose: () => void;
};

ReactModal.setAppElement("#root");

export const LeadModal = ({
  isOpen,
  leadName,
  fileName,
  onClose,
}: LeadModalProps) => {
  return (
    <ReactModal
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      overlayClassName="overlay"
      className="content"
    >
      <img
        id="navigator"
        src={
          process.env.NODE_ENV === "development"
            ? `http://localhost:8888/img/${fileName}`
            : `${process.env.PUBLIC_URL}/img/${fileName}`
        }
        alt="A hand drawn likeness of you!"
      />
      <h1>{`Hi ${leadName}, tell us what brought you to SaaStr?`}</h1>
      <LeadForm />
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
};
