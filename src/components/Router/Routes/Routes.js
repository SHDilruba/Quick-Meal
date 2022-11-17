import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import PrivateRoute from "../../PrivateRoute";
import Login from "../../Login/Login";
import ServiceDetail from "../../ServiceDetails/ServiceDetail";
import Services from "../../Services/Services";
import Signup from "../../Signup/Signup";
import { createBrowserRouter } from "react-router-dom";

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
        path: '/review/:_id',
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/addservice',
        element: <PrivateRoute><div></div></PrivateRoute>
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