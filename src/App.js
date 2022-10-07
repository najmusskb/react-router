import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Barighor from './components/Barighor/Barighor';
import Main from './Layout/Main';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';
function App() {
  const router = createBrowserRouter([
    {

      path: '/', element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },

        // post er jonno data load kortechi then amra ekta special hook use korbo
        {
          path: '/post',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')

          },
          element: <Post></Post>
        },
        {

          path: '/post/:postid',

          loader: async ({ params }) => {
            // console.log(params)
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)

          },

          element: < PostDetails ></PostDetails >


        },


        {
          path: '/Products',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },

          element: < Products ></Products >
        },



        // module 52.5  daynamic vabe route set kora 
        {
          path: 'Product/:Productid',
          loader: async ({ params }) => {
            // console.log(params)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.Productid}`)

          },
          element: < ProductDetails ></ProductDetails >
        },


        { path: '/Barighor', element: <Barighor></Barighor> }
      ]
    },

    { path: '/*', element: <div>This Route Not Found</div> }



  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
