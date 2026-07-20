import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButtons.css";

const WhatsAppButtons = () => {
  const whatsappNumber = "919108900230";
  const message =
    "Hi Ashwija HR Consultancy, I would like to enquire about your services.";

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
    >
      <div className="whatsapp-icon-box">
        <FaWhatsapp />
      </div>

      <div className="whatsapp-content">
        <span className="whatsapp-title">
          Chat With Us
        </span>

        <span className="whatsapp-subtitle">
          Usually replies in minutes
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButtons;