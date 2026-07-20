import "./LegalModal.css";

const LegalModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="legal-overlay" onClick={onClose}>
      <div
        className="legal-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="legal-header">
          <h2>{title}</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="legal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;