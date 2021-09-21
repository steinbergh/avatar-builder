import { Confetti } from "Confetti";
import React from "react";
import ReactModal from "react-modal";
import "./style.css";

type ThankYouModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAfterColse: () => void;
};

ReactModal.setAppElement("#root");

export const ThankYouModal = ({
  isOpen,
  onClose,
  onAfterColse,
}: ThankYouModalProps) => {
  const [fireConfetti, setFireConfetti] = React.useState<boolean | number>(
    false
  );

  React.useEffect(() => {
    const timer = setTimeout(() => onClose(), 4 * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <>
      <ReactModal
        onAfterOpen={() => {
          setFireConfetti(Math.random());
        }}
        onRequestClose={onClose}
        onAfterClose={onAfterColse}
        shouldCloseOnOverlayClick
        isOpen={isOpen}
        overlayClassName="overlay"
        className="content"
        preventScroll
      >
        <h1>{`Thank you and see you soon!`}</h1>
      </ReactModal>
      <Confetti fireConfetti={fireConfetti} />
    </>
  );
};
