import { LeadForm } from "LeadForm";
import ReactModal from "react-modal";
import "./style.css";

type LeadModalProps = {
  isOpen: boolean;
  leadName: string;
  fileName: string;
  onClose: () => void;
  shouldPrint: boolean;
};

ReactModal.setAppElement("#root");

export const LeadModal = ({
  isOpen,
  leadName,
  fileName,
  shouldPrint,
  onClose,
}: LeadModalProps) => {
  // React.useEffect(() => {
  //   const handAfterPrint = () => onClose();
  //   window.addEventListener("onafterprint", handAfterPrint);
  //   return window.removeEventListener("onafterprint", handAfterPrint);
  // });

  const photoUrl =
    process.env.NODE_ENV === "development"
      ? `http://localhost:8888/img/${fileName}`
      : `${window.location.protocol}//${window.location.host}/wp-content/uploads/nvgtrs/${fileName}`;
  return (
    <ReactModal
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      overlayClassName="overlay"
      className="content"
      preventScroll
    >
      <img id="navigator" src={photoUrl} alt="A hand drawn likeness of you!" />
      <h1>{`Hi ${leadName}, tell us what brought you to SaaStr?`}</h1>
      <LeadForm
        firstname={leadName}
        photoUrl={photoUrl}
        shouldPrint={shouldPrint}
        onClose={onClose}
      />
    </ReactModal>
  );
};
