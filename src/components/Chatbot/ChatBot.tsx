import { FormEvent, useState } from "react"
import OpenAI from 'openai';
import Button from '@mui/material/Button';
import InputMultiline from "../InputMultiline";
import styles from './Chatbot.module.css';

const ChatbotApp = () => {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 4000,
      });
      console.log("response", result.choices[0].text);
      setApiResponse(result.choices[0].text);
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };


  return (
    <>
      <div
      >
        <form onSubmit={handleSubmit}>
          <InputMultiline
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
          />
          <Button
            disabled={loading || prompt.length === 0}
            type="submit"
          >
            {loading ? "Generating..." : "Generate"}
          </Button>
        </form>
      </div>
      {apiResponse && (
        <div className={styles.response}
        >
          <strong className={styles.response__header}>API response:</strong>
          {apiResponse}
        </div>
      )}
    </>
  );
};


export default ChatbotApp;