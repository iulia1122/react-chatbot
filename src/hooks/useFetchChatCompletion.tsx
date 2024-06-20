import { useEffect, useState } from "react";

export const useFetchChatCompletion = (question: string) => {
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchChatCompletion = async () => {
    if (!question) {
      return;
    }

    setLoading(true);

    try {
      return await fetch(`http://localhost:3001/openai/chatCompletion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: question }],
        }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
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
    fetchChatCompletion();

  }, [question]);

  return {
    loading,
    apiResponse,
  };
};

export default useFetchChatCompletion;
