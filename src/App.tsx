
import './App.css';
import ChatbotApp from './components/Chatbot/ChatBot';
// import Layout from './components/Layout/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout/Layout';


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
  // return (
  //   <div className="App">
  //     <Routes>
  //       <Route path="/" element={<Layout/>}>
  //         <Route index element={<Home />} />
  //       </Route>
  //       <Route path="/chatbot" element={<ChatbotApp/>}></Route>
  //     </Routes>
  //     <Layout>
  //       <ChatbotApp/>
  //     </Layout>
  //   </div>
  // );
}

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/chatbot">Chatbot</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
