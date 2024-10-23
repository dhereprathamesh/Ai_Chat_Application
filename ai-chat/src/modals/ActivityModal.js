import React, { useContext } from "react";
import "./Modals.css";
import { Context } from "../context/Context";

const ActivityModal = ({ onClose }) => {
  const { prevPrompts } = useContext(Context);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Recent Activity</h2>
        <p>Your recent prompts:</p>
        <ul>
          {prevPrompts.map((prompt, index) => (
            <li key={index}>{prompt}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ActivityModal;
