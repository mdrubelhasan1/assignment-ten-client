import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import AuthProviders from './components/providers/AuthProviders';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RecipiDetails from './components/RecipieDetails/RecipiDetails';
import RecipieCard from './components/RecipieCard/RecipieCard';
import ErrorPage from './components/ErrorPage/ErrorPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: ':id',
        element: <RecipiDetails></RecipiDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chefdata/${params.id}`)
      },
      {
        path: '/chefdata/:id',
        element: <RecipieCard></RecipieCard>,
        
      },
      {
        path: '/',
        element: <Home></Home>,
       
        
      }
     
     
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
