import { createContext, useState } from "react";
import runChat from "../config/gemini";
import toast from "react-hot-toast";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const handleResponse = (response) => {
    let responseArray = response.split("**");
    let newResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
  };

  const onSent = async (prompt) => {
    if (!input && !prompt) {
      toast.error("Please enter a prompt");
      return;
    }

    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    try {
      const promptToSend = prompt || input;
      setPrevPrompts((prev) => {
        const updatedPrompts = [...prev, promptToSend];
        return updatedPrompts;
      });
      setRecentPrompt(promptToSend);

      response = await runChat(promptToSend);

      if (!response) {
        throw new Error("No response from AI");
      }

      handleResponse(response);
    } catch (error) {
      console.error("Error:", error);
      setResultData("Sorry, I couldn't process that. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const contextValue = {
    prevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
