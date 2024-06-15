
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/layout/Layout';
import { routes } from './routes/routes';


function App() {

  const router = createBrowserRouter([{
    element: <Layout />,
    children: routes,
  }]);

  return (
      <RouterProvider router={router} />
  )
}

export default App;
