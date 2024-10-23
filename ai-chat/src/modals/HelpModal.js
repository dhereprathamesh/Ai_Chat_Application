import React from "react";
import "./Modals.css";

const HelpModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Help</h2>
        <p>Here are some common questions and answers to help you:</p>
        <ul>
          <li>How to use the chatbot?</li>
          <li>How to reset the chat?</li>
          <li>How to get better responses?</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default HelpModal;
