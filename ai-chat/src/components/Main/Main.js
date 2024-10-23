import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser as faUserIcon,
  faCompass,
  faLightbulb,
  faComment,
  faCode,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/Context";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import "./Main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>AI ChatBot</p>
        <div className="user-icon">
          <FontAwesomeIcon icon={faUserIcon} alt="User Icon" />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="suggestions">
              <div className="cards">
                <div
                  className="card"
                  onClick={() =>
                    onSent("Suggest beautiful places to see on a road trip")
                  }
                >
                  <p>Beautiful places to see on a road trip</p>
                  <FontAwesomeIcon icon={faCompass} alt="Compass Icon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    onSent("Briefly summarize this concept: urban planning")
                  }
                >
                  <p>Urban planning summary</p>
                  <FontAwesomeIcon icon={faLightbulb} alt="Bulb Icon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    onSent("Brainstorm team bonding activities for a retreat")
                  }
                >
                  <p>Team bonding activities</p>
                  <FontAwesomeIcon icon={faComment} alt="Message Icon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    onSent("Improve the readability of the following code")
                  }
                >
                  <p>Improve code readability</p>
                  <FontAwesomeIcon icon={faCode} alt="Code Icon" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <FontAwesomeIcon icon={faUserIcon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <EmojiObjectsIcon />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
            />
            <div style={{ color: "white", cursor: "pointer" }}>
              <FontAwesomeIcon
                icon={faPaperPlane}
                alt="Send Icon"
                onClick={() => onSent(input)}
              />
            </div>
          </div>
          <p className="bottom-info">
            Feel free to ask anything, I'm here to assist you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
