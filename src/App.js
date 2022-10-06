import logo from './logo.svg';

import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Barighor from './components/Barighor/Barighor';
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/Products', element: <Products></Products> },
        { path: '/Barighor', element: <Barighor></Barighor> }
      ]
    },




  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
