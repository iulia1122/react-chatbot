import ChatbotApp from "../components/Chatbot/ChatBot";


function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

export const routes = [{
    path: "/",
    element: <Home />,
  },
  {
    path: "/chatbot",
    element: <ChatbotApp />,
  }];

export const navLinks = [{
    path: "/",
    name: "Home"
}, {
    path: "/chatbot",
    name: "Chatbot",
}
]
