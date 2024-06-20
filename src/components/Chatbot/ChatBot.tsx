import { useEffect, useState } from "react"
import styles from './Chatbot.module.css';

const ChatbotApp = () => {

  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");


  const fetchChatCompletion =  async () => {

    if(!question) {
      return;
    }

    setLoading(true);

    try {
      return await fetch(`http://localhost:3001/openai/chatCompletion`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({messages: [{role: 'user', content: question}]}), 
      }).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        console.log(response);
        setApiResponse(response.statusText);
      });
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
    };

  useEffect(() => {
    fetchChatCompletion()
  },[question])

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