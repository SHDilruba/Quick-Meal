import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import PrivateRoute from "../../PrivateRoute";
import Login from "../../Login/Login";
import ServiceDetail from "../../ServiceDetails/ServiceDetail";
import Services from "../../Services/Services";
import Signup from "../../Signup/Signup";
import { createBrowserRouter } from "react-router-dom";
import MyReviews from "../../MyReviews/MyReviews";
import AddService from "../../AddService/AddService";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/serviceDetail/:id',
        element: <ServiceDetail></ServiceDetail>,
        loader: ({params})=> fetch(`https://quick-meal2-server.vercel.app/services/${params.id}`)
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: '/addService',
        loader:  async() =>{
          return fetch('https://quick-meal2-server.vercel.app/services')
        },
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element:  <Login></Login>
      }
    ]
  }
]);

export default router;