import React from "react";
import "./Modals.css";

const SettingsModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Settings</h2>
        <p>Here you can adjust various settings for your application:</p>
        <ul>
          <li>Change language preferences.</li>
          <li>Manage notification settings.</li>
          <li>Adjust theme settings (light/dark mode).</li>
          <li>Check for updates.</li>
        </ul>
        <p>
          If you have any specific preferences, feel free to explore the
          options!
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SettingsModal;
