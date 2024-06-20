import { useState } from "react"
import React from "react";
import useFetchChatCompletion from "../../hooks/useFetchChatCompletion";
import styles from './Chatbot.module.css';

const ChatbotApp = () => {

  const [prompt, setPrompt] = useState("");
  const [question, setQuestion] = useState("");

  const { loading, apiResponse } = useFetchChatCompletion(question);

  const onKeyDownHandler = async(event: { key: string; }) => {
    if(event.key === 'Enter') {
        setQuestion(event.key);
    }
  };

  return (

      <div>
        <h3> Ask me something </h3>
          <input 
          type="text"
          placeholder="Message"
          className="input input-bordered w-full m-10"
          value={prompt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
            onKeyDown={(event) => onKeyDownHandler(event)}
          />

            {loading}
            {loading && !apiResponse && "Generating..."}
            {apiResponse && (
              <div className={styles.response}
              >
                <strong className={styles.response__header}>API response:</strong>
                {apiResponse}
              </div>
            )}
      </div>
  );
};


export default ChatbotApp;