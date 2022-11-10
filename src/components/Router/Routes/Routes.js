import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import PrivateRoute from "../../HomeServices/PrivateRoute";
import ServiceDetail from "../../ServiceDetails/ServiceDetail";
import Services from "../../Services/Services";

const { createBrowserRouter } = require("react-router-dom");

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
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/service',
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/serviceadd',
        element: <PrivateRoute><div></div></PrivateRoute>
      },
      {
        path: '/review',
        element: <PrivateRoute><div></div></PrivateRoute>
      },
      {
        path: '/register',
        element: <PrivateRoute><div></div></PrivateRoute>
      },
      {
        path: '/login',
        element:  <PrivateRoute><div></div></PrivateRoute>
      }
    ]
  }
]);

export default router;