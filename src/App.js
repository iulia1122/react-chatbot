
import './App.css';
import ChatbotApp from './components/ChatBot.tsx';
import Layout from './components/layout/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <Layout>
        <ChatbotApp/>
      </Layout>
    </div>
  );
}

export default App;
