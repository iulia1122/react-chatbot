
import './App.css';
import ChatbotApp from './components/Chatbot/ChatBot';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/layout/Layout';


function App() {

  const router = createBrowserRouter([
    {
    element: <Layout />,
    children: 
    [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/chatbot",
      element: <ChatbotApp />,
    },
  ]
}]);

  return (
      <RouterProvider router={router} />
  )
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
