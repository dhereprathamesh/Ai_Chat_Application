import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faQuestionCircle,
  faHistory,
  faCog,
  faBars,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import HelpModal from "../../modals/HelpModal";
import ActivityModal from "../../modals/ActivityModal";
import SettingsModal from "../../modals/SettingsModal";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showActivity, setShowActivity] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <FontAwesomeIcon
          className="menu"
          icon={faBars}
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <FontAwesomeIcon icon={faPlus} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                key={index}
                className="recent-entry"
                onClick={() => loadPrompt(item)}
              >
                <FontAwesomeIcon icon={faComment} />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div
          className="bottom-item recent-entry"
          onClick={() => setShowHelp(true)}
        >
          <FontAwesomeIcon icon={faQuestionCircle} />
          {extended ? <p>Help</p> : null}
        </div>

        <div
          className="bottom-item recent-entry"
          onClick={() => setShowActivity(true)}
        >
          <FontAwesomeIcon icon={faHistory} />
          {extended ? <p>Activity</p> : null}
        </div>

        <div
          className="bottom-item recent-entry"
          onClick={() => setShowSettings(true)}
        >
          <FontAwesomeIcon icon={faCog} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>

      {/* Modals */}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {showActivity && <ActivityModal onClose={() => setShowActivity(false)} />}
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </div>
  );
};

export default Sidebar;
